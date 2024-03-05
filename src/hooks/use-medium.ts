import { formatPostsData } from "@/lib/utils";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export type PostData = {
  link: string;
  author: string;
  created: number;
  enclosures: string[];
  content_encoded: string;
  media: any;

  category: string[];
  title: string;
  content: string;
  published: number;
};

export type Post = {
  image: string;
  initiatives: string[];
  title: string;
  desc: string;
  date: string;
  link: string;
};

export default function useMedium() {
  const [postsData, setPostsData] = useState<PostData[] | undefined>();
  const posts: Post[] | undefined = useMemo(
    () => formatPostsData(postsData),
    [postsData]
  );
  const topPosts = useMemo(() => posts?.slice(0, 3), [posts]);

  const handleFetchPosts = () =>
    axios
      .get("https://v1.nocodeapi.com/freetribenetwork/medium/OHsUxriHCyMnpQwH")
      .then(({ data }) => data)
      .then(setPostsData)
      .catch(console.error);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  return { posts, topPosts };
}
