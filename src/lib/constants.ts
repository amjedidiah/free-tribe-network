export const isDev = process.env.NODE_ENV === "development";

export const domain = typeof window === "object" ? window.location.origin : "";

export const DAILY_REVALIDATION = 60 * 60 * 24; // 24 hours

export enum ResourcesIds {
  AnnualReports = "dGVybTo3",
  Bulletins = "dGVybTo1",
  Researches = "dGVybTo2",
  SpecialPublications = "dGVybTo4",
  ProjectActivityReport = "dGVybToxMA==",
}
