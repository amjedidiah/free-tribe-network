export const isDev = process.env.NODE_ENV === "development";

export const domain = isDev
  ? "https://localhost:3000"
  : "https://www.freetribenetwork.org";

export const DAILY_REVALIDATION = 60 * 60 * 24; // 24 hours
