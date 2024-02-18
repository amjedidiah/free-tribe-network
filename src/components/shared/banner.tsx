import Image from "next/image";

type BannerProps = {
  image: string;
  title: string;
  children?: React.ReactNode;
  picturePosition?: string;
  wrapperClassName?: string;
};

export default function Banner({
  image,
  title,
  children,
  picturePosition = "center",
  wrapperClassName,
}: BannerProps) {
  return (
    <section className="max-h-[692px] h-[80vh] relative mt-20 text-white">
      <Image
        src={image}
        fill
        alt="banner"
        style={{ objectFit: "cover", objectPosition: picturePosition }}
        priority
      />
      <article
        className={`absolute h-full w-full left-0 top-0 flex flex-col justify-center ${wrapperClassName}`}
      >
        <div className="container">
          <h1 className="text-4xl lg:text-[3.5rem] lg:leading-[4rem] font-bold max-w-[50rem]">
            {title}
          </h1>
          {children}
        </div>
      </article>
    </section>
  );
}
