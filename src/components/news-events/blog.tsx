"use client";
import ActivityTabsContent from "@/components/news-events/activity-tabs-content";
import NoInitiativeData from "@/components/news-events/no-initiative-data";
import BlogList from "@/components/shared/blog-list";
import { fetchMediumPosts } from "@/lib/actions/medium";
import { BLOG_PAGE_LIMIT } from "@/lib/constants";
import { useMemo, useState } from "react";
import useSWRImmutable from "swr/immutable";
import MyPagination from "@/components/shared/my-pagination";
import FetchingLoader from "@/components/shared/fetching-loader";
import { useTranslations } from "next-intl";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  const { data, isLoading } = useSWRImmutable("/api/medium", fetchMediumPosts);
  const [start, setStart] = useState(0);
  const t = useTranslations("News")
  const posts = useMemo(
    () => data?.posts.slice(start, start + BLOG_PAGE_LIMIT),
    [data?.posts, start]
  );
  const handleFetchNext = () => setStart((prev) => prev + BLOG_PAGE_LIMIT);
  const handleFetchPrev = () => setStart((prev) => prev - BLOG_PAGE_LIMIT);

  return (
    <ActivityTabsContent trigger={trigger}>
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          <BlogList list={posts} />

          <FetchingLoader isFetching={isLoading} title={t("blog posts")} />

          {!posts?.length && !isLoading && (
            <NoInitiativeData shouldShowRefreshButton={false} />
          )}
        </div>
        <MyPagination
          hasNextPage={start + BLOG_PAGE_LIMIT < (data?.posts.length || 0)}
          hasPreviousPage={start > 0}
          onFetchNext={handleFetchNext}
          onFetchPrev={handleFetchPrev}
        />
      </div>
    </ActivityTabsContent>
  );
}
