"use client";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import BlogList from "@/components/shared/blog-list";
import useMedium from "@/hooks/use-medium";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  const { posts } = useMedium();

  return (
    <ActivityTabsContent trigger={trigger} isBlog>
      <BlogList list={posts} />

      {!posts.length && <NoInitiativeData shouldShowRefreshButton={false} />}
    </ActivityTabsContent>
  );
}
