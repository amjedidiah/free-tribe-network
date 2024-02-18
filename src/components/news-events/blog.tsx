"use client";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import useInitiativeEvent from "@/hooks/use-initiative-data";
import { postsData } from "@/lib/data";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import BlogList from "@/components/shared/blog-list";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  const { displayedData, shouldShowRefreshButton } =
    useInitiativeEvent<(typeof postsData)[number]>(postsData);

  return (
    <ActivityTabsContent trigger={trigger} isBlog>
      <BlogList postsData={displayedData} />

      {!displayedData.length && (
        <NoInitiativeData shouldShowRefreshButton={shouldShowRefreshButton} />
      )}
    </ActivityTabsContent>
  );
}
