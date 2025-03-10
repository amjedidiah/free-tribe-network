import DonateBanner from "@/components/donate/donate-banner";
import DonateFAQ from "@/components/donate/donate-faq";
import TheProblem from "@/components/donate/the-problem";
import ScrollToSection from "@/components/shared/scroll-to-section";
import { getMetadata } from "@/lib/actions/metadata";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { PropsWithLocaleParam } from "@/lib/types";
import { setRequestLocale } from "next-intl/server";
import { Fragment } from "react";

export const revalidate = MINUTELY_REVALIDATION;

export async function generateMetadata({ params }: PropsWithLocaleParam) {
  const { locale } = await params;

  return getMetadata(
    locale,
    "https://res.cloudinary.com/amjedidiah/image/upload/v1741477860/ftn/donate-banner_n2ad95.webp",
    "Layout.metaData.donate"
  );
}

export default async function Donate({
  params,
}: Readonly<PropsWithLocaleParam>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Fragment>
      <DonateBanner />
      <TheProblem />
      <DonateFAQ />
      <ScrollToSection />
    </Fragment>
  );
}
