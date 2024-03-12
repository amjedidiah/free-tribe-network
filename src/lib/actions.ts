"use server";
import { validate } from "deep-email-validator";
import { RESOURCES_PAGE_LIMIT, isDev } from "@/lib/constants";
import { JSDOM } from "jsdom";
import truncateHtml from "truncate-html";
import { cache } from "react";
import {
  FetchCategoriesByIdData,
  FetchCategoriesByIdVars,
  IContentImage,
  Post,
  PostData,
  Resource,
  IActivity,
} from "@/lib/types";
import { parse } from "rss-to-json";
import { getApolloClient } from "@/lib/apollo-client";
import {
  GET_ACTIVITY_BY_SLUG,
  GET_IMAGE_BY_TITLE,
  GET_RESOURCES_BY_CATEGORY_ID,
} from "@/lib/queries";

export const validateEmailAPI = (email: string) =>
  validate({
    email,
    validateDisposable: !isDev,
    validateMx: true,
    validateRegex: true,
    validateSMTP: true,
    validateTypo: false,
  });

const contentWithoutImage = (text: string) => {
  // Parse the text as HTML using jsdom
  const dom = new JSDOM(text);
  const document = dom.window.document;

  // Get all the img elements in the document and loop through them
  const images = document.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    // Remove each img element from its parent node
    images[i].parentNode?.removeChild(images[i]);
  }

  // Serialize the modified document back to text
  const newText = dom.serialize();

  return newText;
};

const extractContentImage = (text: string) => {
  // Parse the text as HTML using jsdom
  const dom = new JSDOM(text);
  const document = dom.window.document;

  // Get the first img element in the document and get its src attribute
  const image = document.querySelector("img");
  const src = image ? image.getAttribute("src") : null;

  // Do something with the src value, such as displaying it or sending it to the server
  return src; // for example, return it
};

const formatPostsData = (postsData: PostData[]): Post[] =>
  postsData.map(({ category, title, content, published, link }) => ({
    image:
      extractContentImage(content) || "/images/banners/who-we-are-banner.jpeg",
    initiatives: category,
    title,
    link,
    desc: truncateHtml(contentWithoutImage(content), 50, { byWords: true }),
    date: new Date(published).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

export const fetchMediumPosts = cache(async () => {
  try {
    const { items } = await parse("https://medium.com/feed/@freetribenetwork");

    const posts = formatPostsData(items);
    const topPosts = posts.slice(0, 3);

    return { posts, topPosts };
  } catch (error) {
    console.error(error);
    return { posts: [], topPosts: [] };
  }
});

const extractResourcesContent = (
  {
    node: {
      excerpt,
      id,
      title,
      modifiedGmt,
      featuredImage,
      resourcesFieldGroup,
    },
    cursor,
  }: any,
  hideDescription = false
): Resource => ({
  id,
  cursor,
  title,
  description: hideDescription
    ? ""
    : truncateHtml(excerpt, 20, {
        byWords: true,
      }),
  modifiedDate: new Date(modifiedGmt).toDateString(),
  src: featuredImage?.node?.mediaItemUrl,
  url: resourcesFieldGroup.file?.node?.link,
  minsRead: resourcesFieldGroup.minsread,
});

export const fetchResourcesByCategoryId = cache(
  async ({
    id,
    hideDescription = false,
    before = "",
    after = "",
    hasOverflow,
    first = !hasOverflow ? RESOURCES_PAGE_LIMIT : 0,
    last,
  }: FetchCategoriesByIdVars) => {
    const apolloClient = getApolloClient();

    try {
      const resourcesData = await apolloClient.query({
        query: GET_RESOURCES_BY_CATEGORY_ID,
        variables: {
          id,
          env: process.env.NODE_ENV,
          first,
          last,
          before,
          after,
        },
      });

      return {
        ...resourcesData.data.category.posts.pageInfo,
        title: resourcesData.data.category.name,
        resourceList: resourcesData.data.category.posts.edges.map((item: any) =>
          extractResourcesContent(item, hideDescription)
        ),
      } as FetchCategoriesByIdData;
    } catch (error) {
      console.error(error);
      return {} as FetchCategoriesByIdData;
    }
  }
);

export const fetchImageByTitle = cache(async (title: string) => {
  const apolloClient = getApolloClient();

  try {
    const imageData = await apolloClient.query({
      query: GET_IMAGE_BY_TITLE,
      variables: {
        title,
      },
    });

    return imageData.data.mediaItems.nodes[0] as IContentImage;
  } catch (error) {
    console.error(error);
    return {} as IContentImage;
  }
});

function formatDateTime(dateObj: Date) {
  // Extract components
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleString("en-US", { weekday: "long" });
  const hours = dateObj.getHours() % 12 || 12; // 12-hour format
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const meridian = dateObj.getHours() >= 12 ? "pm" : "am";

  const date = `${weekday} ${month} ${day} ${year}`;
  const time = `${hours}:${minutes}${meridian}`;

  // Format the date string
  return {
    dateTime: `${date} ${time}`,
    date,
    time,
  };
}

const formatActivity = ({ categories, ...rest }: any): IActivity => {
  const isUpcoming = categories.nodes.some((item: { name: string }) =>
    item.name.includes("Upcoming")
  );

  return {
    ...rest,
    isUpcoming,
    newsFieldGroup: {
      ...rest.newsFieldGroup,
      ...formatDateTime(new Date(rest.newsFieldGroup.dateTime)),
    },
  };
};

export const fetchActivityBySlug = cache(async (slug: string) => {
  const apolloClient = getApolloClient();

  try {
    const activityData = await apolloClient.query({
      query: GET_ACTIVITY_BY_SLUG,
      variables: {
        slug,
      },
    });
    if (!activityData.data.activities.nodes.length) return;

    return formatActivity(activityData.data.activities.nodes[0]);
  } catch (error) {
    console.error(error);
  }
});