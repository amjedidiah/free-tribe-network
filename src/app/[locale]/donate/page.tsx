import DonateBanner from "@/components/donate/donate-banner";
import DonateFAQ from "@/components/donate/donate-faq";
import TheProblem from "@/components/donate/the-problem";
import ScrollToSection from "@/components/shared/scroll-to-section";
import { getMetadata } from "@/lib/actions/metadata";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { PropsWithLocaleParam } from "@/lib/types";
import { unstable_setRequestLocale } from "next-intl/server";
import { Fragment } from "react";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://freetribenetwork.com/wp-content/uploads/2024/03/donate-banner-scaled.webp",
    "Layout.metaData.donate"
  );

export default function Donate({ params: { locale } }: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  return (
    <Fragment>
      <DonateBanner />
      <TheProblem />
      <DonateFAQ />
      <ScrollToSection />
    </Fragment>
  );
}
