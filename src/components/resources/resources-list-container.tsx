"use client";
import ResourcesCard from "@/components/resources/resources-card";
import { cn } from "@/lib/utils";
import MyPagination from "@/components/shared/my-pagination";
import useContentList, { UseContentListProps } from "@/hooks/use-content-list";
import { FetchCategoriesByIdData, FetchCategoriesByIdVars } from "@/lib/types";
import { fetchResourcesByCategoryId } from "@/lib/actions/wordpress";
import { RESOURCES_PAGE_LIMIT } from "@/lib/constants";
import { ResourcesListProps } from "@/components/resources/resources-list";
import ShouldRender from "@/components/shared/should-render";
import FetchingLoader from "@/components/shared/fetching-loader";

type Props = Pick<
  ResourcesListProps,
  "hasOverflow" | "isSecondary" | "hasBorder"
> &
  Pick<
    UseContentListProps<FetchCategoriesByIdData, FetchCategoriesByIdVars>,
    "params"
  >;

export default function ResourcesListContainer({
  hasOverflow,
  isSecondary,
  hasBorder,
  ...rest
}: Props) {
  const {
    isLoading,
    title,
    resourceList,
    handleFetchNext,
    handleFetchPrev,
    hasNextPage,
    hasPreviousPage,
  } = useContentList<FetchCategoriesByIdData, FetchCategoriesByIdVars>({
    ...rest,
    fetchAction: fetchResourcesByCategoryId,
    limit: RESOURCES_PAGE_LIMIT,
  });

  return (
    <div
      className={cn("container flex flex-col gap-8", {
        "lg:overflow-x-visible": hasOverflow,
      })}
    >
      <h2>{title}</h2>
      <FetchingLoader isFetching={isLoading} title="resources" />
      <ShouldRender condition={Boolean(!resourceList?.length) && !isLoading}>
        <article className="col-span-full text-center grid gap-3 p-8">
          <h5>
            No <span className="font-medium">{title}</span> yet
          </h5>
        </article>
      </ShouldRender>
      <ShouldRender condition={Boolean(resourceList?.length)}>
        <div
          className={cn("gap-6", {
            "flex max-sm:flex-wrap sm:overflow-auto sm:min-w-[100vw] pb-8 sm:pr-40":
              hasOverflow,
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": !hasOverflow,
          })}
        >
          {resourceList?.map((item, i) => (
            <ResourcesCard
              key={`${item.title}-${i}`}
              className={cn({
                "basis-full sm:basis-[356px] lg:basis-[322px] xl:basis-[350px] sm:flex-grow-0 sm:flex-shrink-0":
                  hasOverflow,
                "[&_a]:bg-secondary-500": isSecondary,
                "[&_a]:bg-primary-500": !isSecondary,
                "border-[6px] ": hasBorder,
                "border-secondary-100": hasBorder && isSecondary,
                "border-primary-100": hasBorder && !isSecondary,
              })}
              {...item}
            />
          ))}
        </div>
      </ShouldRender>

      <ShouldRender condition={Boolean(!hasOverflow && resourceList?.length)}>
        <MyPagination
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          onFetchPrev={handleFetchPrev}
          onFetchNext={handleFetchNext}
          isSecondary={isSecondary}
        />
      </ShouldRender>
    </div>
  );
}
