"use client";
import BlogList from "@/components/shared/blog-list";
import useMedium from "@/hooks/use-medium";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TopPosts() {
  const { topPosts, posts } = useMedium();
  if (!topPosts) return null;

  return (
    <section className="py-10 lg:py-28">
      <article className="container grid gap-11">
        <div className="h2-gap">
          <h2 className="text-gray-900">Blog Articles</h2>
          <p className="text-description max-w-[35rem]">
            Read some excerpts from our blog
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 sm:grid-cols-2">
          <BlogList list={topPosts} />
        </div>

        {posts.length > 3 && (
          <Link href="/news-events?section=blog-posts" className="mx-auto">
            <Button>See More</Button>
          </Link>
        )}
      </article>
    </section>
  );
}
