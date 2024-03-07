import Image, { ImageProps } from "next/image";
import { fetchImageByTitle } from "@/lib/actions";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

export default async function ContentImage({ title, ...rest }: Props) {
  const { mediaItemUrl } = await fetchImageByTitle(title);

  return <Image src={mediaItemUrl} alt={title} {...rest} />;
}
