import { Fragment } from "react";
import HomeBanner from "@/components/home/home-banner";
import HomeInitiatives from "@/components/home/home-initiatives";
import TopPosts from "@/components/home/top-posts";
import HomeOurVision from "@/components/home/home-our-vision";
import Testimonials from "@/components/shared/testimonials";
import Support from "@/components/shared/support";
import Team from "@/components/shared/team";
import Partners from "@/components/shared/partners";
import dynamic from "next/dynamic";
import { bots } from "@/lib/data";
import OurImpact from "@/components/shared/our-impact";
import { DAILY_REVALIDATION } from "@/lib/constants";
import { PropsWithLocaleParam } from "@/lib/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import ScrollToSection from "@/components/shared/scroll-to-section";

const Tweets = dynamic(() => import("../../components/home/tweets"), {
  ssr: false,
});

// TODO: Cancel revalidation on this when post has become more than 3
export const revalidate = DAILY_REVALIDATION;

export default async function Home({
  params: { locale },
}: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Team");

  return (
    <Fragment>
      <HomeBanner />
      <OurImpact />
      <HomeOurVision />
      <TopPosts />
      <HomeInitiatives />
      <Testimonials />
      <Team
        title="Board of Trustees"
        mates={bots}
        id={t("Board of Trustees").toLowerCase().replaceAll(" ", "-")}
        className="lg:py-24 bg-snow"
        matesContainerClassName="max-lg:flex-wrap lg:flex lg:overflow-auto lg:min-w-[100vw] lg:pr-32 2xl:pr-[30%] lg:pb-5"
        shouldSeeMore
      />
      <Support />
      <Partners />
      <Tweets />
      <ScrollToSection />
    </Fragment>
  );
}
