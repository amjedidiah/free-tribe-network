import Image, { ImageProps } from "next/image";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

export default function ContentImage({ title, ...rest }: Props) {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-content/uploads/${title}.webp`}
      alt={title}
      {...rest}
    />
  );
}
