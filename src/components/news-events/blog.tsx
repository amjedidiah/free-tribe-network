"use client";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import BlogList from "@/components/shared/blog-list";
import { fetchMediumPosts } from "@/lib/actions";
import useSWRImmutable from "swr/immutable";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  const { data } = useSWRImmutable("/api/medium", fetchMediumPosts);
  if (!data) return null;

  return (
    <ActivityTabsContent trigger={trigger} isBlog>
      <BlogList list={data.posts} />

      {!data.posts.length && (
        <NoInitiativeData shouldShowRefreshButton={false} />
      )}
    </ActivityTabsContent>
  );
}
