import Partners from "@/components/shared/partners";
import { Fragment, Suspense } from "react";
import Testimonials from "@/components/shared/testimonials";
import WhoWeAreBanner from "@/components/who-we-are/who-we-are-banner";
import HistoryMissionVision from "@/components/who-we-are/history-mission-vision";
import WhatWeDo from "@/components/who-we-are/what-we-do";
import Bot from "@/components/who-we-are/bot";
import Team from "@/components/shared/team";
import { workFamily } from "@/lib/data";
import WorkWithUs from "@/components/who-we-are/work-with-us";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { PropsWithLocaleParam } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { getMetadata } from "@/lib/actions/metadata";
import ScrollToSection from "@/components/shared/scroll-to-section";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://freetribenetwork.com/wp-content/uploads/2024/04/inspiration-scaled.webp",
    "Layout.metaData.who we are"
  );

export default function WhoWeAre({ params: { locale } }: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Nav.menu");

  return (
    <Fragment>
      <ScrollToSection />
      <WhoWeAreBanner />
      <Suspense fallback={null}>
        <HistoryMissionVision />
      </Suspense>
      <WhatWeDo />
      <Bot />
      <Team
        title="The Work Family"
        mates={workFamily}
        id={t("Staff").toLowerCase()}
        className="lg:pt-24 lg:pb-36"
        matesContainerClassName="lg:grid-cols-4 [&_.image-container]:w-full"
      />
      <WorkWithUs />
      <Testimonials />
      <Partners />
    </Fragment>
  );
}
