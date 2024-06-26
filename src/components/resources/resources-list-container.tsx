"use client";
import { cn, getIdFromCategoryTitle } from "@/lib/utils";
import MyPagination from "@/components/shared/my-pagination";
import useContentList, { UseContentListProps } from "@/hooks/use-content-list";
import {
  FetchCategoriesByIdData,
  FetchCategoriesByIdVars,
  ResourceListMainProps,
} from "@/lib/types";
import { fetchResourcesByCategoryId } from "@/lib/actions/wordpress";
import { RESOURCES_PAGE_LIMIT } from "@/lib/constants";
import ShouldRender from "@/components/shared/should-render";
import FetchingLoader from "@/components/shared/fetching-loader";
import ResourcesListContainerContent from "@/components/resources/resources-list-container-content";
import { memo } from "react";

type Props = ResourceListMainProps &
  Pick<
    UseContentListProps<FetchCategoriesByIdData, FetchCategoriesByIdVars>,
    "params" | "initData"
  >;

function ResourcesListContainer({
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
      <h2 id={getIdFromCategoryTitle(title)}>{title}</h2>
      <FetchingLoader isFetching={isLoading} title="resources" />
      <ShouldRender condition={!isLoading}>
        <ResourcesListContainerContent
          title={title}
          resourceList={resourceList}
          isSecondary={isSecondary}
          hasBorder={hasBorder}
          hasOverflow={hasOverflow}
        />
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

export default memo(ResourcesListContainer);
