import { Locale, LocaleCountry } from "@/lib/types";

export const isDev = process.env.NODE_ENV === "development";

export const domain = typeof window === "object" ? window.location.origin : "";

export const DAILY_REVALIDATION = 60 * 60 * 24; // 24 hours

export const HOURLY_REVALIDATION = 60 * 60; // 1 hour

export const MINUTELY_REVALIDATION = 60 * 15; // 15 minutes

export const RESOURCES_PAGE_LIMIT = 4;

export const ACTIVITIES_PAGE_LIMIT = 6;

export const BLOG_PAGE_LIMIT = ACTIVITIES_PAGE_LIMIT;

export const CONSENT_COOKIE_NAME = "Xf7oUpXcZ4GVjGirBmNs";

export const localeLabels = {
  [LocaleCountry.GB]: Locale.en,
  [LocaleCountry.FR]: Locale.fr,
  [LocaleCountry.NL]: Locale.nl,
};