import Image from "next/image";

type BannerProps = {
  image: string;
  title: string;
  children?: React.ReactNode;
};

// TODO: Make banner image shorter, but full-width
export default function Banner({ image, title, children }: BannerProps) {
  return (
    <section className="min-h-fit h-auto flex items-center mt-20 relative border">
      <Image src={image} alt="banner" width={1500} height={692} />
      <div className="container z-[2] absolute ">
        <h1 className="text-4xl lg:text-5xl font-semibold text-white">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
