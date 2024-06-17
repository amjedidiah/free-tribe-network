import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment, Suspense } from "react";
import Banner from "@/components/shared/banner";
import { initiatives } from "@/lib/data";
import Support from "@/components/shared/support";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { PropsWithLocaleParam } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getMetadata } from "@/lib/actions/metadata";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://freetribenetwork.com/wp-content/uploads/2024/03/our-initiatives-banner-scaled.webp",
    "Layout.metaData.our initiatives"
  );

export default function OurInitiatives({
  params: { locale },
}: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Our initiative");

  return (
    <Fragment>
      <Banner imageTitle="our-initiatives-banner" title={t('title')} />
      <section className="container" id="initiativesContainer">
        <Suspense fallback={null}>
          {initiatives.map((item) => (
            <InitiativeBlock key={item.name} {...item} />
          ))}
        </Suspense>
      </section>
      <Support />
    </Fragment>
  );
}
