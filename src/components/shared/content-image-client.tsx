"use client";

import Image, { ImageProps } from "next/image";
import { useContentImageContext } from "@/context/content-image-context";
import { ClientContentImageTitle } from "@/lib/types";

type Props = {
  title: ClientContentImageTitle;
} & Omit<ImageProps, "src" | "alt">;

function ContentImageClient({ title, ...rest }: Props) {
  const clientContentImages = useContentImageContext();
  const data = clientContentImages?.[title];
  if (!data) return null;
  if (!rest.width && !rest.fill) {
    const ratio =
      (data.mediaDetails?.width || 1) / (data.mediaDetails?.height || 1);
    rest.width = ratio * Number(rest.height);
  }

  return <Image src={data.mediaItemUrl} alt={title} {...rest} />;
}

export default ContentImageClient;
