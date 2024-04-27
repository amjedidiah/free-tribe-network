import { PageInfo } from "@/lib/types";
import { MouseEventHandler, useEffect, useState, useTransition } from "react";

export type UseContentListProps<T, K> = {
  params: K;
  fetchAction: (params: K) => Promise<T>;
  limit: number;
};

export default function useContentList<T extends PageInfo, K>({
  params,
  fetchAction,
  limit,
}: UseContentListProps<T, K>) {
  const [isLoading, setIsLoading] = useState(true);
  const [_isPending, startTransition] = useTransition();
  const [data, setData] = useState<T>({} as T);

  const handleFetchPrev: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data?.hasPreviousPage) return;

    fetchAction({
      ...params,
      first: 0,
      last: limit,
      before: data.startCursor,
      after: "",
    })
      .then((response) => {
        startTransition(() => setData(response));
      })
      .catch(console.error);
  };

  const handleFetchNext: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data?.hasNextPage) return;

    fetchAction({
      ...params,
      first: limit,
      last: 0,
      before: "",
      after: data.endCursor,
    })
      .then((response) => {
        startTransition(() => setData(response));
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!Object.keys(data).length) {
      fetchAction(params)
        .then(setData)
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [data, fetchAction, params]);

  return {
    ...data,
    isLoading,
    handleFetchPrev,
    handleFetchNext,
  };
}
