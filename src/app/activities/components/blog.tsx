import PostCard from "@/components/post-card";

const posts = [
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
  },
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
  },
  {
    title: "UX review presentations",
    image: "/images/blog.png",
    shortDesc:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    readTime: "8 min read",
    author: "Olivia Rhye",
    authorImage: "/images/Avatar.png",
    date: "20 Jan 2022",
  },
];

export default function Blog() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </div>
  );
}
