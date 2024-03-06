"use client";
import Partners from "@/components/shared/partners";
import { Fragment } from "react";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import Testimonials from "@/components/shared/testimonials";
import WhoWeAreBanner from "@/components/who-we-are/who-we-are-banner";
import HistoryMissionVision from "@/components/who-we-are/history-mission-vision";
import WhatWeDo from "@/components/who-we-are/what-we-do";
import dynamic from "next/dynamic";
import Team from "@/components/shared/team";
import { workFamily } from "@/lib/data";
import WorkWithUs from "@/components/who-we-are/work-with-us";

const LazyBot = dynamic(() => import("@/components/who-we-are/bot"), {
  ssr: false,
});

export default function WhoWeAre() {
  useScrollToSection();

  return (
    <Fragment>
      <WhoWeAreBanner />
      <HistoryMissionVision />
      <WhatWeDo />
      <LazyBot />
      <Team
        title="The Work Family"
        mates={workFamily}
        id="staff"
        className="lg:pt-44 lg:pb-36"
        matesContainerClassName="lg:grid-cols-4 [&_.image-container]:w-full"
      />
      <WorkWithUs />
      <Testimonials />
      <Partners />
    </Fragment>
  );
}
