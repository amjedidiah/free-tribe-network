import algoliaSearch from "algoliasearch";

export const searchClient = algoliaSearch(
  process.env.NEXT_PUBLIC_APP_ID as string,
  process.env.NEXT_PUBLIC_SEARCH_API_KEY as string
);

export const HITS_PER_PAGE = 3;

// const data = [{}];
// const index = searchClient.initIndex("NEXT_INTL_CONTENT");
// await index.saveObjects(data);
