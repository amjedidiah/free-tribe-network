import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";
import ContentImage from "@/components/shared/content-image";

type BannerProps = {
  image?: string;
  imageTitle?: string;
  title?: string;
  picturePosition?: string;
  wrapperClassName?: string;
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

export default function Banner({
  image,
  imageTitle,
  title,
  children,
  picturePosition = "center",
  wrapperClassName,
  id,
  className,
  ...rest
}: BannerProps) {
  return (
    <section
      className={cn(
        "max-h-[692px] h-[70vh] max-lg:max-h-[420px] relative mt-32 text-white",
        className
      )}
      id={id}
      {...rest}
    >
      {image && (
        <ContentImage
          title={image}
          fill
          style={{ objectFit: "cover", objectPosition: picturePosition }}
          priority
        />
      )}
      {imageTitle && (
        <ContentImage
          title={imageTitle}
          fill
          style={{ objectFit: "cover", objectPosition: picturePosition }}
          priority
        />
      )}
      <article
        className={`absolute h-full w-full left-0 top-0 flex flex-col justify-center ${wrapperClassName}`}
      >
        <div className="container h1-gap">
          <h1 className="max-w-[50rem] capitalize">{title}</h1>
          {children}
        </div>
      </article>
    </section>
  );
}
