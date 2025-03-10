import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment, Suspense } from "react";
import Banner from "@/components/shared/banner";
import { initiatives } from "@/lib/data";
import Support from "@/components/shared/support";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { setRequestLocale } from "next-intl/server";
import { PropsWithLocaleParam } from "@/lib/types";
import { useTranslations } from "next-intl";
import { getMetadata } from "@/lib/actions/metadata";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://res.cloudinary.com/amjedidiah/image/upload/v1741477549/ftn/initiatives-banner_mz4dwp.webp",
    "Layout.metaData.our initiatives"
  );

export default function OurInitiatives({
  params: { locale },
}: Readonly<PropsWithLocaleParam>) {
  setRequestLocale(locale);
  const t = useTranslations("Our initiative");

  return (
    <Fragment>
      <Banner imageTitle="initiatives-banner_mz4dwp" title={t("title")} />
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
