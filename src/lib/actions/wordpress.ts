"use server";

import { ACTIVITIES_PAGE_LIMIT, RESOURCES_PAGE_LIMIT } from "@/lib/constants";
import truncateHtml from "truncate-html";
import { cache } from "react";
import {
  FetchCategoriesByIdData,
  FetchCategoriesByIdVars,
  IContentImage,
  Resource,
  IActivity,
  fetchActivitiesByCategoryNameVars,
  fetchActivitiesByCategoryNameData,
} from "@/lib/types";
import { getApolloClient } from "@/lib/apollo-client";
import {
  GET_ACTIVITIES_BY_CATEGORY_NAME,
  GET_ACTIVITY_BY_SLUG,
  GET_IMAGE_BY_TITLE,
  GET_RESOURCES_BY_CATEGORY_ID,
} from "@/lib/queries";

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

const formatActivity = ({
  cursor,
  node: { categories, ...rest },
}: any): IActivity => {
  const isUpcoming = categories.nodes.some((item: { slug: string }) =>
    item.slug.includes("upcoming")
  );

  return {
    ...rest,
    isUpcoming,
    cursor,
    categories: categories.nodes,
    newsFieldGroup: {
      ...rest.newsFieldGroup,
      ...formatDateTime(new Date(rest.newsFieldGroup.dateTime)),
    },
    description: truncateHtml(rest.excerpt, 10, {
      byWords: true,
    }),
  };
};

export const fetchActivityBySlug = cache(async (slug: string) => {
  const apolloClient = getApolloClient();

  try {
    const activityData = await apolloClient.query({
      query: GET_ACTIVITY_BY_SLUG,
      variables: {
        slug,
        env: process.env.NODE_ENV,
      },
    });
    if (!activityData.data.activities.edges.length) return;

    return formatActivity(activityData.data.activities.edges[0]);
  } catch (error) {
    console.error(error);
    return {} as IActivity;
  }
});

export const fetchActivitiesByCategoryName = cache(
  async ({
    categoryName,
    before = "",
    after = "",
    first = ACTIVITIES_PAGE_LIMIT,
    last,
  }: fetchActivitiesByCategoryNameVars) => {
    const apolloClient = getApolloClient();

    try {
      const activitiesData = await apolloClient.query({
        query: GET_ACTIVITIES_BY_CATEGORY_NAME,
        variables: {
          categoryName,
          env: process.env.NODE_ENV,
          first,
          last,
          before,
          after,
        },
      });

      return {
        ...activitiesData.data.activities.pageInfo,
        activityList: activitiesData.data.activities.edges.map(formatActivity),
      } as fetchActivitiesByCategoryNameData;
    } catch (error) {
      console.error(error);
      return {} as fetchActivitiesByCategoryNameData;
    }
  }
);
