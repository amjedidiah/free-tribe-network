import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment, Suspense } from "react";
import Banner from "@/components/shared/banner";
import { initiatives } from "@/lib/data";
import Support from "@/components/shared/support";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { PropsWithLocaleParam } from "@/lib/types";

export const revalidate = MINUTELY_REVALIDATION;

export default function OurInitiatives({
  params: { locale },
}: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);

  return (
    <Fragment>
      <Banner imageTitle="our-initiatives-banner" title="Our Initiatives" />
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
