import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Mate = {
  name: string;
  src: string;
  title: string;
};

type TeamProps = {
  title: string;
  shouldSeeMore?: boolean;
  mates: Mate[];
  matesContainerClassName: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Team({
  title,
  shouldSeeMore = false,
  mates,
  id,
  className,
  matesContainerClassName,
}: TeamProps) {
  return (
    <section className={cn("py-10 grid gap-8", className)} id={id}>
      <article className="container">
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">{title}</h2>
          {shouldSeeMore && (
            <Link
              href="/who-we-are?section=staff"
              className=" bg-primary-400 text-white font-semibold py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
            >
              See More
            </Link>
          )}
        </div>
      </article>
      <article className="container lg:overflow-x-visible">
        <div
          className={cn(
            "grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-7 max-lg:justify-evenly",
            matesContainerClassName
          )}
        >
          {mates.map(({ name, src, title }) => (
            <div key={name} className="grid gap-6">
              <div className="lg:w-[288px] h-[296px] relative image-container">
                <Image
                  src={src}
                  alt={name}
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="shadow-xl"
                />
              </div>
              <div className="grid gap-1">
                <p className="text-gray-900 text-xl font-medium">{name}</p>
                <p className="text-secondary-500 text-lg">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
