import { IGMedia } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

type Props = IGMedia & { index: number };

function IGFeedImage({ id, media_url, permalink, index }: Props) {
  return (
    <a
      className={cn("aspect-square relative", {
        "max-sm:hidden": index >= 6,
        "max-lg:hidden": index >= 9,
        "max-xl:hidden": index >= 12,
        "max-2xl:hidden": index >= 15,
      })}
      href={permalink}
      aria-label={id}
    >
      <Image
        alt={id}
        src={media_url}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="opacity-80 hover:opacity-100"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4DwABAQEASQEYiK3/4gAAAABJRU5ErkJggg=="
      />
    </a>
  );
}

export default memo(IGFeedImage);
