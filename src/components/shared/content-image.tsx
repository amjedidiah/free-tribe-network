"use client";
import { CldImage } from "next-cloudinary";
import { ImageProps } from "next/image";

type Props = {
  title: string;
} & Omit<ImageProps, "src" | "alt">;

export default function ContentImage({ title, ...rest }: Props) {
  return <CldImage src={`ftn/${title}`} alt={title} {...rest} />;
}
