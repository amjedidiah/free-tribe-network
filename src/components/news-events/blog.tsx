"use client";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import PostCard from "@/components/news-events/post-card";
import useInitiativeEvent from "@/hooks/use-initiative-data";
import { postsData } from "@/lib/data";
import NoInitiativeData from "@/components/news-events/no-initiative-data";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  const { displayedData, shouldShowRefreshButton } =
    useInitiativeEvent<(typeof postsData)[number]>(postsData);

  return (
    <ActivityTabsContent trigger={trigger} isBlog>
      {displayedData.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}

      {!displayedData.length && (
        <NoInitiativeData shouldShowRefreshButton={shouldShowRefreshButton} />
      )}
    </ActivityTabsContent>
  );
}
