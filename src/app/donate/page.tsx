import DonateBanner from "@/components/donate/donate-banner";
import DonateFAQ from "@/components/donate/donate-faq";
import TheProblem from "@/components/donate/the-problem";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { Fragment } from "react";

export const revalidate = MINUTELY_REVALIDATION;

export default function Donate() {
  return (
    <Fragment>
      <DonateBanner />
      <TheProblem />
      <DonateFAQ />
    </Fragment>
  );
}
