import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment, Suspense } from "react";
import Banner from "@/components/shared/banner";
import { initiatives } from "@/lib/data";
import Support from "@/components/shared/support";
import { HOURLY_REVALIDATION } from "@/lib/constants";

export const revalidate = HOURLY_REVALIDATION;

export default function OurInitiatives() {
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
