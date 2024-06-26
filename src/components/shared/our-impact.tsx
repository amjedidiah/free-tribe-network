import { stats } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CountUpValue from "@/components/home/count-up-value";

export default function OurImpact() {
  const t = useTranslations("Home.Impact");

  return (
    <section className="py-10 lg:pt-10 lg:pb-20">
      <article className="container grid gap-12">
        <div className="h2-gap lg:items-center lg:text-center">
          <h2>{t("Heading.title")}</h2>
          <p className="max-w-3xl">{t("Heading.description")}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-7">
          {stats.map(({ src, value, title }) => (
            <div
              key={title}
              className="stats-shadow pt-6 pb-14 px-10 flex flex-col gap-8 items-center text-center basis-56 flex-1"
            >
              <div className="h-20 w-20 rounded-full bg-primary-50 flex items-center justify-center relative">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="100%"
                  className="p-3"
                />
              </div>
              <div className="h3-gap">
                <h3 className="text-secondary-500">
                  <CountUpValue
                    end={value}
                    duration={5}
                    separator=","
                    suffix={value > 1 ? "+" : ""}
                  />
                </h3>
                <p className="max-w-44">{t(`Stats.${title}` as any)}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
