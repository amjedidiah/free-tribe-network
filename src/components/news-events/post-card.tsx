import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { formatLinkLabel } from "@/lib/utils";
import { Post } from "@/hooks/use-medium";
import SafeHTML from "@/components/shared/safe-html";

export default function PostCard({
  image,
  title,
  initiatives,
  desc,
  date,
  link,
}: Post) {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full relative h-[240px] rounded-[0.625rem]">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectPosition: "center", objectFit: "cover" }}
          className="rounded-[0.625rem]"
          sizes="100%"
        />
      </div>
      <div className="flex flex-col items-stretch gap-3">
        <div className="grid gap-3">
          <div className="h5-gap">
            <div className="flex justify-between items-center">
              <h5 className="text-gray-900">
                <a href={link} target="_blank">
                  {title}
                </a>
              </h5>
              <Image
                src="/icons/arrow-up-right.svg"
                alt="arrow-up-right"
                width={24}
                height={24}
              />
            </div>
            <div className="">
              <SafeHTML htmlContent={desc} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-fit text-secondary-500 items-center text-xs rounded-full font-medium">
            {initiatives.map((item) => (
              <Badge
                key={item}
                variant={"secondary"}
                className="bg-[rgba(230,239,243,0.5)] rounded-full px-2 py-[2px] uppercase"
              >
                {formatLinkLabel(item)}
              </Badge>
            ))}
            {/* <span className="mr-3">{readTime}</span> */}
          </div>
        </div>

        <div className="flex gap-3 items-center">
          {/* <Image
            height={40}
            width={40}
            src={authorImage}
            alt={author}
          /> */}
          <div className="text-gray-900 text-sm">
            {/* <p className="font-medium">{author}</p> */}
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
