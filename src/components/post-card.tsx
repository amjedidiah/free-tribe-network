import Image from "next/image";
import { Badge } from "./ui/badge";

type PostCardProps = {
  post: {
    image: string;
    title: string;
    readTime: string;
    shortDesc: string;
    author: string;
    authorImage: string;
    date: string;
  };
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col bg-white gap-6 lg:gap-8">
      <Image src={post.image} alt={post.title} width={380} height={240} className="w-full" />
      <div className="flex flex-col items-stretch gap-4">
        <div className="flex gap-2 p-1 text-secondary self-start items-center text-xs bg-gray-200 rounded-full">
          <Badge variant={"secondary"} className="bg-white rounded-full px-2 py-[2px]">
            STAR
          </Badge>
          <span className="mr-2">{post.readTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <Image src="/icons/arrow-up-right.svg" alt="arrow-up-right" width={24} height={24} />
        </div>
        <p className="text-base lg:text-lg">{post.shortDesc}</p>
      </div>
      <div className="flex gap-2 items-center">
        <Image height={40} width={40} src={post.authorImage} alt={post.author} />
        <div>
          <p>{post.author}</p>
          <p className="">{post.date}</p>
        </div>
      </div>
    </div>
  );
}
