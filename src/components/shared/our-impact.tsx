import { stats } from "@/lib/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function OurImpact() {
  return (
    <section className="py-10 lg:pt-10 lg:pb-20">
      <article className="container grid gap-20">
        <div className="h2-gap lg:items-center lg:text-center">
          <h2>Our Impact In Numbers</h2>
          <p className="max-w-3xl">Let our numbers speak for us.</p>
        </div>
        <div className="flex w-contain lg:w-[960px] xl:w-[1216px] 2xl:w-[1472px]">
          <Marquee pauseOnHover speed={85} delay={0} autoFill>
            {stats.map(({ src, value, title }) => (
              <div
                key={title}
                className="stats-shadow pt-6 pb-14 px-10 flex flex-col gap-8 items-center text-center mx-7 lg:mx-14"
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
          </Marquee>
        </div>
      </article>
    </section>
  );
}
