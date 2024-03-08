import Image, { ImageProps } from "next/image";
import { fetchImageByTitle } from "@/lib/actions";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

export default async function ContentImage({ title, ...rest }: Props) {
  const data = await fetchImageByTitle(title);
  if (!data) return null;

  return <Image src={data.mediaItemUrl} alt={title} {...rest} />;
}