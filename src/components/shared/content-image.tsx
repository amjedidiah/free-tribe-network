import Image, { ImageProps } from "next/image";
import { fetchImageByTitle } from "@/lib/actions/wordpress";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

export default async function ContentImage({ title, ...rest }: Props) {
  const data = await fetchImageByTitle(title);
  if (!data) return null;
  if (!rest.width && !rest.fill) {
    const ratio =
      (data.mediaDetails?.width || 1) / (data.mediaDetails?.height || 1);
    rest.width = ratio * Number(rest.height);
  }

  return <Image src={data.mediaItemUrl} alt={title} {...rest} />;
}