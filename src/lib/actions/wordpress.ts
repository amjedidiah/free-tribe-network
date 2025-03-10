"use server";

import { ACTIVITIES_PAGE_LIMIT, RESOURCES_PAGE_LIMIT } from "@/lib/constants";
import truncateHtml from "truncate-html";
import { cache } from "react";
import {
  FetchCategoriesByIdData,
  FetchCategoriesByIdVars,
  Resource,
  IActivity,
  fetchActivitiesByCategoryNameVars,
  fetchActivitiesByCategoryNameData,
  Locale,
} from "@/lib/types";
import { getApolloClient } from "@/lib/apollo-client";
import {
  GET_ACTIVITIES_BY_CATEGORY_NAME,
  GET_ACTIVITY_BY_SLUG,
  GET_RESOURCES_BY_CATEGORY_ID,
} from "@/lib/queries";
import { getLocale } from "next-intl/server";

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
  locales: string,
  hideDescription = false,
): Resource => ({
  id,
  cursor,
  title,
  description: hideDescription
    ? ""
    : truncateHtml(excerpt, 20, {
        byWords: true,
      })?.toString(),
  modifiedDate: new Date(modifiedGmt).toLocaleDateString(locales),
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
    const locale = await getLocale();
    const locales = `${locale}-${locale.toUpperCase()}`;

    try {
      const resourcesData = await apolloClient.query({
        query: GET_RESOURCES_BY_CATEGORY_ID,
        variables: {
          id,
          env: `${process.env.NODE_ENV}${
            locale !== Locale.en ? "-" + locale : ""
          }`,
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
          extractResourcesContent(item, locales, hideDescription)
        ),
      } as FetchCategoriesByIdData;
    } catch (error) {
      console.error(error);
      return {} as FetchCategoriesByIdData;
    }
  }
);

function formatDateTime(dateObj: Date, locale: string) {
  const locales =
    {
      en: "en-GB",
    }[locale] ?? `${locale}-${locale.toUpperCase()}`;

  // Extract components
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString(locales, { month: "long" });
  const day = dateObj.getDate();
  const weekday = dateObj.toLocaleString(locales, { weekday: "long" });
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

const formatActivity = (
  { cursor, node: { categories, ...rest } }: any,
  locale: string
): Promise<IActivity> => {
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
      ...formatDateTime(new Date(rest.newsFieldGroup.dateTime), locale),
    },
    description: truncateHtml(rest.excerpt, 10, {
      byWords: true,
    }),
  };
};

export const fetchActivityBySlug = cache(async (slug: string) => {
  const apolloClient = getApolloClient();
  const locale = await getLocale();

  try {
    const activityData = await apolloClient.query({
      query: GET_ACTIVITY_BY_SLUG,
      variables: {
        slug,
        env: process.env.NODE_ENV,
      },
    });
    if (!activityData.data.activities.edges.length) return;

    const formattedActivity = formatActivity(
      activityData.data.activities.edges[0],
      locale
    );
    return formattedActivity;
  } catch (error) {
    console.error(error);
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
    const locale = await getLocale();

    try {
      const activitiesData = await apolloClient.query({
        query: GET_ACTIVITIES_BY_CATEGORY_NAME,
        variables: {
          language: locale.toUpperCase(),
          categoryName: `${categoryName}${
            locale !== Locale.en ? "-" + locale : ""
          }`,
          env: `${process.env.NODE_ENV}${
            locale !== Locale.en ? "-" + locale : ""
          }`,
          first,
          last,
          before,
          after,
        },
      });

      return {
        ...activitiesData.data.activities.pageInfo,
        activityList: activitiesData.data.activities.edges.map((item: any) =>
          formatActivity(item, locale)
        ),
      } as fetchActivitiesByCategoryNameData;
    } catch (error) {
      console.error(error);
      return {} as fetchActivitiesByCategoryNameData;
    }
  }
);
