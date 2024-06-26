import algoliaSearch from "algoliasearch";

export const searchClient = algoliaSearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string
);

export const HITS_PER_PAGE = 3;
