import ActivityTabsContent from "@/components/activity-tabs-content";
import PostCard from "@/components/post-card";
import { posts } from "@/lib/data";

type Props = {
  trigger: string;
};

export default function Blog({ trigger }: Props) {
  return (
    <ActivityTabsContent trigger={trigger} isBlog>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </ActivityTabsContent>
  );
}
