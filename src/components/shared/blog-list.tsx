import PostCard from "@/components/news-events/post-card";
import { Post } from "@/hooks/use-medium";

type Props = {
  list: Post[];
};

export default function BlogList({ list }: Props) {
  if (!list) return null;

  return list.map((item, i) => (
    <PostCard key={`${item.title}-${i}`} {...item} />
  ));
}
