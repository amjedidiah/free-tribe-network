import { stats } from "@/lib/data";
import Image from "next/image";

export default function OurImpact() {
  return (
    <section className="py-10 lg:pt-10 lg:pb-20">
      <article className="container grid gap-20">
        <div className="h2-gap lg:items-center lg:text-center">
          <h2>Our Impact In Numbers</h2>
          <p className="max-w-3xl">Let our numbers speak for us.</p>
        </div>
        <div className="flex flex-wrap justify-between gap-7">
          {stats.map(({ src, value, title }) => (
            <div
              key={title}
              className="stats-shadow pt-6 pb-14 px-10 flex flex-col gap-8 items-center text-center basis-56 flex-1"
            >
              <div className="h-14 w-14 rounded-full bg-primary-50 flex items-center justify-center relative">
                <Image src={src} alt={title} fill sizes="100%" />
              </div>
              <div className="h3-gap">
                <h3 className="text-secondary-500">{value}</h3>
                <p className="max-w-44">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
