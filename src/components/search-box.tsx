"use client";

import algoliasearch from "algoliasearch/lite";
import { SearchCheck } from "lucide-react";
import Link from "next/link";
import { InstantSearch, SearchBox, Hits, Highlight } from "react-instantsearch";

const searchClient = algoliasearch(
  "6JKMFMJHUC",
  "45d5056a29f21d94f36339e587488afd"
);

function Hit({ hit }: any) {
  return (
    <Link href={hit.link}>
      <div className="bg-white my-4">
        <h1 className="text-lg font-semibold underline">{hit.title}</h1>
        <p className="line-clamp-3 text-gray-400">
          <Highlight attribute="content" hit={hit} />
        </p>
      </div>
    </Link>
  );
}

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="initiatives">
      <div className="relative">
        <SearchBox
          classNames={{
            root: "shadow-sm",
            form: "relative flex items-center gap-2 border bg-white rounded-md px-2",
            input:
              "block w-full px-3 py-2 bg-white border-none placeholder-slate-400 focus:outline-none focus:border-none focus:ring-none",
            submitIcon: "size-5",
          }}
        />
        <div className="absolute bg-white w-[800px] mt-4 shadow-lg border p-4 z-50">
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
};

export default Search;
