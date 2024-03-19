export const isDev = process.env.NODE_ENV === "development";

export const domain = typeof window === "object" ? window.location.origin : "";

export const DAILY_REVALIDATION = 60 * 60 * 24; // 24 hours

export const HOURLY_REVALIDATION = 60 * 60; // 1 hour

export const RESOURCES_PAGE_LIMIT = 4;

export const ACTIVITIES_PAGE_LIMIT = 6;

export const BLOG_PAGE_LIMIT = ACTIVITIES_PAGE_LIMIT;
