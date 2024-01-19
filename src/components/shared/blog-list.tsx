"use client";
import PostCard from "@/components/news-events/post-card";
import { postsData as data } from "@/lib/data";

type Props = {
  postsData?: typeof data;
};

export default function BlogList({ postsData = data }: Props) {
  return (
    <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2">
      {postsData.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
