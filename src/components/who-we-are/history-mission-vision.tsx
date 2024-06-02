"use client";
import { visionMissionData } from "@/lib/data";
import VisionMissionCard from "@/components/who-we-are/vision-mission-card";
import ContentImageClient from "@/components/shared/content-image-client";
import { Link } from "@/lib/i18n.config";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import { useTranslations } from "next-intl";

export default function HistoryMissionVision() {
  const t = useTranslations("Who we are.History");
  useScrollToSection();

  return (
    <section className="py-10 lg:pt-28">
      <div className="container flex flex-col gap-8">
        <article className="h2-gap" id="our-history">
          <h2 className="text-black">{t("title")}</h2>
          <div className="text-description flex flex-col gap-3 [&_a]:underline">
            <p>{t("content one")}</p>
            <ContentImageClient
              title="inspiration"
              width={1920}
              height={1080}
              className="rounded shadow-ls"
            />
            <p>{t("content two")}</p>
            <p>{t("content three")}</p>
            <p>
              {t("content four.sub one")}
              <Link href="/our-initiatives?section=rfh-advocacy">
                {t("content four.link one")}
              </Link>
              {t("content four.sub two")}
              <Link href="/our-initiatives?section=repromatters">
                {t("content four.link two")}
              </Link>
              {t("content four.sub three")}
            </p>
            <p>{t("content five")}</p>
          </div>
        </article>
        <article
          className="grid sm:grid-cols-3 gap-8 lg:gap-16"
          id="mission-vision"
        >
          {visionMissionData.map((card, index) => (
            <VisionMissionCard {...card} key={card.title + index} />
          ))}
        </article>
      </div>
    </section>
  );
}
