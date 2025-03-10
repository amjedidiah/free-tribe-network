import { PageInfo } from "@/lib/types";
import { MouseEventHandler, useEffect, useState, useTransition } from "react";

export type UseContentListProps<T, K> = {
  params: K;
  fetchAction: (params: K) => Promise<T>;
  limit: number;
  initData?: T;
};

export default function useContentList<T extends PageInfo, K>({
  params,
  fetchAction,
  limit,
  initData = {} as T,
}: UseContentListProps<T, K>) {
  const initDataKeysLength = Object.keys(initData).length;
  const [isLoading, setIsLoading] = useState(!initDataKeysLength);
  const [_isPending, startTransition] = useTransition();
  const [data, setData] = useState<T>(initData);

  const handleFetchPrev: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data?.hasPreviousPage) return;

    setIsLoading(true);
    // fetchAction({
    //   ...params,
    //   first: 0,
    //   last: limit,
    //   before: data.startCursor,
    //   after: "",
    // })
    //   .then((response) => {
    //     startTransition(() => setData(response));
    //   })
    //   .catch(console.error)
    //   .finally(() => setIsLoading(false));
  };

  const handleFetchNext: MouseEventHandler<HTMLAnchorElement> = async () => {
    if (!data?.hasNextPage) return;

    setIsLoading(true);
    // fetchAction({
    //   ...params,
    //   first: limit,
    //   last: 0,
    //   before: "",
    //   after: data.endCursor,
    // })
    //   .then((response) => {
    //     startTransition(() => setData(response));
    //   })
    //   .catch(console.error)
    //   .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (initDataKeysLength) return;

    setIsLoading(true);
    // fetchAction(params)
    //   .then(setData)
    //   .catch(console.error)
    //   .finally(() => setIsLoading(false));
  }, [fetchAction, initDataKeysLength, params]);

  return {
    ...data,
    isLoading,
    handleFetchPrev,
    handleFetchNext,
  };
}
