import Image from "next/image";

type BannerProps = {
  image: string;
  title: string;
  children?: React.ReactNode;
};

// TODO: Make banner image shorter, but full-width
export default function Banner({ image, title, children }: BannerProps) {
  return (
    <section className="max-h-[85vh] relative border mt-20">
      <Image
        src={image}
        width={1500}
        height={697}
        alt="banner"
        className="max-h-[85vh] min-w-full"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <article className="absolute bg-[rgba(26,26,26,0.65)] h-full w-full left-0 top-0 flex flex-col justify-center ">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-semibold text-white">
            {title}
          </h1>
          {children}
        </div>
      </article>
    </section>
  );
}
