import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { postsData } from "@/lib/data";

type PostCardProps = {
  post: (typeof postsData)[number];
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      <div className="w-full relative h-[240px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-stretch gap-8">
        <div className="grid gap-4">
          <div className="flex gap-2 p-1 pr-3 w-fit text-primary-700 items-center text-xs bg-gray-200 rounded-full">
            <Badge
              variant={"secondary"}
              className="bg-white text-primary-700 rounded-full px-2 py-[2px] uppercase"
            >
              {post.initiative}
            </Badge>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-gray-900 font-semibold">
                {post.title}
              </h2>
              <Image
                src="/icons/arrow-up-right.svg"
                alt="arrow-up-right"
                width={24}
                height={24}
              />
            </div>
            <p>{post.shortDesc}</p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Image
            height={40}
            width={40}
            src={post.authorImage}
            alt={post.author}
          />
          <div className="text-gray-900 text-sm ">
            <p className="font-medium">{post.author}</p>
            <p>{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
