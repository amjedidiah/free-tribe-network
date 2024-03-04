export const isDev = process.env.NODE_ENV === "development";

export const domain = isDev
  ? "https://localhost:3000"
  : "https://www.freetribenetwork.org";
