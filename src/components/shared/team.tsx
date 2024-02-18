import { bot } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <section className="py-10 lg:py-24 bg-snow grid gap-8">
      <article className="container">
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Board of Trustees
          </h2>
          <Link
            href="/who-we-are?section=staff"
            className=" bg-primary-400 text-white font-semibold py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
          >
            See More
          </Link>
        </div>
      </article>
      <article className="container lg:overflow-x-visible">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-lg:flex-wrap max-lg:justify-evenly lg:flex lg:min-w-[100vw] lg:overflow-auto lg:pr-24 lg:pb-5">
          {bot.map(({ name, src, title }) => (
            <div key={name} className="grid gap-6">
              <div className="lg:w-[288px] h-[296px] relative">
                <Image
                  src={src}
                  alt={name}
                  fill
                  style={{ objectFit: "cover" }}
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
