"use client";
import ActivityCard from "@/components/news-events/activity-card";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import useInitiativeEvent from "@/hooks/use-initiative-data";
import { activitiesData } from "@/lib/data";
import NoInitiativeData from "@/components/news-events/no-initiative-data";

type Props = {
  trigger: string;
};

export default function Upcoming({ trigger }: Props) {
  const { displayedData, shouldShowRefreshButton } =
    useInitiativeEvent<(typeof activitiesData)[number]>(activitiesData);

  return (
    <ActivityTabsContent trigger={trigger}>
      {displayedData.map((event) => (
        <ActivityCard key={event.slug} event={event} />
      ))}

      {!displayedData.length && (
        <NoInitiativeData shouldShowRefreshButton={shouldShowRefreshButton} />
      )}
    </ActivityTabsContent>
  );
}
