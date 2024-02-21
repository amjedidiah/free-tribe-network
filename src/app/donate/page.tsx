import DonateBanner from "@/components/donate/donate-banner";
import DonateFAQ from "@/components/donate/donate-faq";
import TheProblem from "@/components/donate/the-problem";
import OurImpact from "@/components/shared/our-impact";
import { Fragment } from "react";

export default function Donate() {
  return (
    <Fragment>
      <DonateBanner />
      <OurImpact />
      <TheProblem />
      <DonateFAQ />
    </Fragment>
  );
}
