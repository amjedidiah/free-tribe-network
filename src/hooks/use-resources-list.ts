import { fetchResourcesByCategoryId } from "@/lib/actions";
import { RESOURCES_PAGE_LIMIT } from "@/lib/constants";
import { FetchCategoriesByIdData, FetchCategoriesByIdVars } from "@/lib/types";
import { MouseEventHandler, useState, useTransition } from "react";

export type UseResourcesListProps = {
  initData: FetchCategoriesByIdData;
  params: FetchCategoriesByIdVars;
};

export default function useResourcesList({
  initData,
  params,
}: UseResourcesListProps) {
  const [_isPending, startTransition] = useTransition();
  const [data, setData] = useState(initData);

  const handleFetchPrev: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data.hasPreviousPage) return;

    fetchResourcesByCategoryId({
      ...params,
      first: 0,
      last: RESOURCES_PAGE_LIMIT,
      before: data.startCursor,
      after: "",
    })
      .then((response) => {
        startTransition(() => setData(response));
      })
      .catch(console.error);
  };

  const handleFetchNext: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data.hasNextPage) return;

    fetchResourcesByCategoryId({
      ...params,
      first: RESOURCES_PAGE_LIMIT,
      last: 0,
      before: "",
      after: data.endCursor,
    })
      .then((response) => {
        startTransition(() => setData(response));
      })
      .catch(console.error);
  };

  return {
    ...data,
    handleFetchPrev,
    handleFetchNext,
  };
}
