import Image from "next/image";

type BannerProps = {
  image: string;
  title?: string;
  children?: React.ReactNode;
  picturePosition?: string;
  wrapperClassName?: string;
  id?: string;
};

export default function Banner({
  image,
  title,
  children,
  picturePosition = "center",
  wrapperClassName,
  id,
}: BannerProps) {
  return (
    <section
      className="max-h-[692px] h-[85vh] relative mt-20 text-white"
      id={id}
    >
      <Image
        src={image}
        fill
        sizes="100%"
        alt="banner"
        style={{ objectFit: "cover", objectPosition: picturePosition }}
        priority
      />
      <article
        className={`absolute h-full w-full left-0 top-0 flex flex-col justify-center ${wrapperClassName}`}
      >
        <div className="container h1-gap">
          <h1 className="max-w-[50rem]">{title}</h1>
          {children}
        </div>
      </article>
    </section>
  );
}
