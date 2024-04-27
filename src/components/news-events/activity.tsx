"use client";
import ActivityCard from "@/components/news-events/activity-card";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import useInitiativeEvent from "@/hooks/use-initiative-data";
import { useMemo } from "react";
import FetchingLoader from "@/components/shared/fetching-loader";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import {
  CategoryName,
  fetchActivitiesByCategoryNameData,
  fetchActivitiesByCategoryNameVars,
} from "@/lib/types";
import { fetchActivitiesByCategoryName } from "@/lib/actions/wordpress";
import MyPagination from "@/components/shared/my-pagination";
import { ACTIVITIES_PAGE_LIMIT } from "@/lib/constants";
import useContentList from "@/hooks/use-content-list";

type Props = {
  trigger: string;
};

export default function Activity({ trigger }: Props) {
  const params: fetchActivitiesByCategoryNameVars = useMemo(
    () => ({ categoryName: trigger as CategoryName }),
    [trigger]
  );
  const {
    isLoading,
    activityList,
    handleFetchNext,
    handleFetchPrev,
    hasNextPage,
    hasPreviousPage,
  } = useContentList<
    fetchActivitiesByCategoryNameData,
    fetchActivitiesByCategoryNameVars
  >({
    params,
    fetchAction: fetchActivitiesByCategoryName,
    limit: ACTIVITIES_PAGE_LIMIT,
  });
  const { displayedData, shouldShowRefreshButton } = useInitiativeEvent(
    activityList,
    trigger
  );

  return (
    <ActivityTabsContent trigger={trigger}>
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {displayedData?.map((event) => (
            <ActivityCard key={event.slug} {...event} />
          ))}
          <FetchingLoader isFetching={isLoading} title="activities" />

          {!displayedData?.length && !isLoading && (
            <NoInitiativeData
              shouldShowRefreshButton={shouldShowRefreshButton}
            />
          )}
        </div>
        <MyPagination
          hasNextPage={Boolean(hasNextPage)}
          hasPreviousPage={Boolean(hasPreviousPage)}
          onFetchNext={handleFetchNext}
          onFetchPrev={handleFetchPrev}
        />
      </div>
    </ActivityTabsContent>
  );
}
