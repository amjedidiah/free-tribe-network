import Autocomplete from "@/components/layout/search/auto-complete";
import { useLazyRef } from "@/hooks/use-lazy-ref";
import { HITS_PER_PAGE, searchClient } from "@/lib/algolia";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { AutocompleteItem } from "@/components/layout/search/auto-complete-item";
import { ClockIcon, TrashIcon } from "lucide-react";
import AutocompleteItemAction from "@/components/layout/search/auto-complete-item-action";
import { AutocompleteItemHeader } from "./auto-complete-item-header";
import { getIdFromCategoryTitle } from "@/lib/utils";
import { AutocompleteQuerySuggestionsHit } from "@algolia/autocomplete-plugin-query-suggestions/dist/esm/types";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { useLocale } from "next-intl";

type WordPressPostType = "post" | "activity";

const getSearchItemUrl = (item: AutocompleteQuerySuggestionsHit) => {
  const permalink = item.permalink.toString();
  const postType = item.post_type.toString() as WordPressPostType;

  const url = (
    {
      post: () => {
        const mainCategory = (item.taxonomies as any).category[0];
        return `/resources?section=${getIdFromCategoryTitle(mainCategory)}`;
      },
      activity: () => {
        const slug = permalink
          .replace("https://freetribenetwork.com", "")
          .split("/")
          .slice(-2, -1)
          .join();

        return `/activity/${slug}`;
      },
    }[postType] || ""
  )();
  return url;
};

export default function Search() {
  const locale = useLocale();
  const taxonomiesLanguage =
    { en: "English", fr: "Français", nl: "Nederlands" }[locale] || "English";

  const getRecentSearchesPlugin = useLazyRef(() =>
    createLocalStorageRecentSearchesPlugin({
      key: "RECENT_SEARCH",
      limit: HITS_PER_PAGE,
      transformSource: ({ source, onRemove }) => ({
        ...source,
        templates: {
          item: ({ item, components }) => (
            <AutocompleteItem
              icon={ClockIcon}
              actions={
                <AutocompleteItemAction
                  icon={TrashIcon}
                  title="Remove this search"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();

                    onRemove(item.label);
                  }}
                />
              }
            >
              <components.ReverseHighlight hit={item} attribute="label" />
            </AutocompleteItem>
          ),
          header: () => <AutocompleteItemHeader title="Recent search" />,
        },
      }),
    })
  );
  const getQuerySuggestionsPlugin = useLazyRef(() =>
    createQuerySuggestionsPlugin({
      searchClient,
      indexName: process.env.NEXT_PUBLIC_WP_INDEX as string,
      transformSource: ({ source }) => ({
        ...source,
        templates: {
          ...source.templates,
          item: ({ item, components }) => {
            return (
              <AutocompleteItem href={getSearchItemUrl(item)}>
                <components.ReverseHighlight
                  hit={item}
                  attribute="post_title"
                />
              </AutocompleteItem>
            );
          },
          header: () => <AutocompleteItemHeader title="Resources" />,
        },
        sourceId: "resources",
        getItems: ({ query }) =>
          getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: process.env.NEXT_PUBLIC_WP_INDEX as string,
                query,
                params: {
                  filters: `(post_type:post) AND (taxonomies.language:${taxonomiesLanguage})`,
                  hitsPerPage: HITS_PER_PAGE,
                },
              },
            ],
          }),
        getItemUrl: ({ item }) => getSearchItemUrl(item),
      }),
    })
  );

  return (
    <Autocomplete
      openOnFocus={true}
      placeholder="Search resources and activities..."
      defaultActiveItemId={0}
      getSources={() => [
        {
          templates: {
            item: ({ item, components }) => {
              return (
                <AutocompleteItem href={getSearchItemUrl(item as any)}>
                  <components.ReverseHighlight
                    hit={item}
                    attribute="post_title"
                  />
                </AutocompleteItem>
              );
            },
            header: () => <AutocompleteItemHeader title="Activities" />,
          },
          sourceId: "activities",
          getItems: ({ query }) =>
            getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: process.env.NEXT_PUBLIC_WP_INDEX as string,
                  query,
                  params: {
                    filters: `(post_type:activity) AND (taxonomies.language:${taxonomiesLanguage})`,
                    hitsPerPage: HITS_PER_PAGE,
                  },
                },
              ],
            }),
        },
      ]}
      plugins={[getRecentSearchesPlugin(), getQuerySuggestionsPlugin()]}
      detachedMediaQuery="(max-width: 1024px)"
      classNames={{
        form: "relative flex-1",
        inputWrapperPrefix:
          "absolute inset-y-0 left-0 pl-[10px] flex items-center",
        inputWrapperSuffix:
          "absolute inset-y-0 right-0 flex items-center hidden",
        label: "flex items-center",
        submitButton: "h-5 w-5 text-black",
        clearButton: "h-5 w-5 text-gray-400 hidden",
        input:
          "block bg-zinc-50 border border-secondary-100 w-full py-[6px] px-[10px] pl-10 rounded-xl outline-none focus:border-secondary-500 focus:ring-secondary-500 sm:text-sm",
        panel:
          "flex-1 [&>div]:max-lg:px-2 [&>div]:max-lg:container lg:flex-none lg:absolute lg:mt-2 lg:py-2 z-10 lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:text-sm text-gray-500 bg-white lg:shadow-lg lg:rounded-md overflow-y-scroll lg:max-h-96",
        detachedSearchButton: "py-2 text-gray-400 hover:text-gray-500",
        detachedSearchButtonQuery: "hidden",
        detachedSearchButtonPlaceholder: "sr-only",
        detachedSearchButtonIcon: "w-6 h-6 flex items-center justify-center",
        detachedContainer:
          "fixed inset-0 flex flex-col divide-y divide-gray-200/50 bg-blue-500 mt-[145px] bg-white",
        detachedFormContainer: "flex p-2 container pl-[18px]",
        detachedCancelButton:
          "bg-white px-2 ml-2 text-gray-500 hover:text-gray-600 transition-colors",
      }}
      className="lg:w-full lg:max-w-[803px]"
    />
  );
}
