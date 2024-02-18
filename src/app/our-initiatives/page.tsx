import InitiativeBlock from "@/components/our-initiatives/initiative-block";
import { Fragment } from "react";
import Banner from "@/components/shared/banner";
import { initiatives } from "@/lib/data";
import Support from "@/components/shared/support";

export default function Page() {
  return (
    <Fragment>
      <Banner
        image="/images/banners/our-initiatives-banner.png"
        title="Our Initiatives"
      />
      <section className="container" id="initiativesContainer">
        {initiatives.map((item) => (
          <InitiativeBlock key={item.name} {...item} />
        ))}
      </section>
      <Support />
    </Fragment>
  );
}
