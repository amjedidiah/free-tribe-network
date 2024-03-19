"use client";
import ActivityCard from "@/components/news-events/activity-card";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import useInitiativeEvent from "@/hooks/use-initiative-data";
import useSWR from "swr";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import { CategoryName } from "@/lib/types";
import { fetchActivitiesByCategoryName } from "@/lib/actions";

type Props = {
  trigger: string;
};

export default function Activity({ trigger }: Props) {
  const { data } = useSWR({ categoryName: trigger as CategoryName }, (key) =>
    fetchActivitiesByCategoryName(key)
  );
  const { displayedData, shouldShowRefreshButton } = useInitiativeEvent(
    data?.activityList,
    trigger
  );

  return (
    <ActivityTabsContent trigger={trigger}>
      {displayedData?.map((event) => (
        <ActivityCard key={event.slug} {...event} />
      ))}

      {!displayedData?.length && (
        <NoInitiativeData shouldShowRefreshButton={shouldShowRefreshButton} />
      )}
    </ActivityTabsContent>
  );
}
