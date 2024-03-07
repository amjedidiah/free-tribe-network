"use server";
import { validate } from "deep-email-validator";
import { isDev } from "@/lib/constants";
import { JSDOM } from "jsdom";
import truncateHtml from "truncate-html";
import { cache } from "react";
import { Post, PostData } from "@/lib/types";
import { parse } from "rss-to-json";
import { getApolloClient } from "@/lib/apollo-client";
import {
  GET_IMAGE_BY_TITLE,
  GET_RESOURCES_BY_CATEGORY_ID,
} from "@/lib/queries";
import { Resource } from "@/components/resources/resources-card";

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
  { excerpt, id, title, modifiedGmt, featuredImage, resourcesFieldGroup }: any,
  hideDescription = false
) => ({
  id,
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
  async (id: string, hideDescription = false) => {
    const apolloClient = getApolloClient();

    try {
      const resourcesData = await apolloClient.query({
        query: GET_RESOURCES_BY_CATEGORY_ID,
        variables: {
          id,
          env: process.env.NODE_ENV,
        },
      });

      return {
        title: resourcesData.data.category.name,
        resourceList: resourcesData.data.category.posts.nodes.map((item: any) =>
          extractResourcesContent(item, hideDescription)
        ) as Resource[],
      };
    } catch (error) {
      console.error(error);
      return {};
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

    return imageData.data.mediaItems.nodes[0];
  } catch (error) {
    console.error(error);
    return {};
  }
});