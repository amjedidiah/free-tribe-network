"use client";

import Image, { ImageProps } from "next/image";
import { fetchImageByTitle } from "@/lib/actions/wordpress";
import useSWRImmutable from "swr/immutable";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

function ContentImageClient({ title, ...rest }: Props) {
  const { data } = useSWRImmutable(title, fetchImageByTitle);
  if (!data) return null;
  if (!rest.width && !rest.fill) {
    const ratio = data.mediaDetails.width / data.mediaDetails.height;
    rest.width = ratio * Number(rest.height);
  }
  //   return <p>Hello</p>;

  return <Image src={data.mediaItemUrl} alt={title} {...rest} />;
}

export default ContentImageClient;
