import ContentImage from "@/components/shared/content-image";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomeOurVision() {
  const t = useTranslations('Home.Vision')
  return (
    <section className="bg-secondary-900 py-10">
      <article className="container grid lg:grid-cols-[1fr,625px] gap-10 items-center">
        <div className="h2-gap">
          <h2 className="text-secondary-50">{t("Heading.title")}</h2>
          <p className="text-secondary-100 max-w-[35rem]">
            {t("Heading.description")}
          </p>
        </div>

        <div className="grid sm:max-lg:grid-cols-3 lg:grid-cols-2 [&>div]:pt-4 [&>div]:px-4">
          <div className="flex flex-col max-lg:justify-between lg:flex-row lg:items-center gap-4 bg-[#f69fd2] lg:col-span-2">
            <div className="">
              <span className="bg-primary-900 py-[2px] px-1 text-primary-100">
                SDG 5
              </span>
              <h3 className="text-2xl lg:text-3xl text-primary-800 uppercase lg:max-w-[11.625rem]">
                {t("gender equality")}
              </h3>
            </div>
            <div className="flex lg:flex-1 justify-end">
              <ContentImage title="sdg-5" width={420} height={411} />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 bg-[#7daabe]">
            <div className="">
              <span className="bg-secondary-800 py-[2px] px-1 text-secondary-100 ">
                SDG 10
              </span>
              <h3 className="text-2xl lg:text-3xl text-secondary-800 uppercase">
                {t("reduced inequalities")}
              </h3>
            </div>
            <div className="flex justify-end">
              <ContentImage title="sdg-10" width={309} height={241} />
            </div>
          </div>
          <div className="grid items-center gap-4 bg-[#04436e]">
            <div className="">
              <span className="bg-secondary-900 py-[2px] px-1 text-secondary-100 ">
                SDG 3
              </span>
              <h3 className="text-2xl lg:text-3xl text-secondary-100 uppercase">
                {t("good health and well being")}
              </h3>
            </div>
            <div className="flex justify-end">
              <Image
                src="/images/sdg/sdg-3.svg"
                alt="sdg-3"
                width={309}
                height={241}
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
