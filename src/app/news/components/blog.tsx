import PostCard from "@/components/post-card";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
