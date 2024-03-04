import { Fragment } from "react";
import HomeBanner from "@/components/home/home-banner";
import HomeInitiatives from "@/components/home/home-initiatives";
import TopPosts from "@/components/home/top-posts";
import HomeOurVision from "@/components/home/home-our-vision";
import Testimonials from "@/components/shared/testimonials";
import Support from "@/components/shared/support";
import Team from "@/components/shared/team";
import Partners from "@/components/shared/partners";
import Tweets from "@/components/home/tweets";
import { bots } from "@/lib/data";
import OurImpact from "@/components/shared/our-impact";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <OurImpact />
      <HomeOurVision />
      <TopPosts />
      <HomeInitiatives />
      <Testimonials />
      <Team
        title="Board of Trustees"
        mates={bots}
        className="lg:py-24 bg-snow"
        matesContainerClassName="max-lg:flex-wrap lg:flex lg:overflow-auto lg:min-w-[100vw] lg:pr-24 lg:pb-8"
        shouldSeeMore
      />
      <Support />
      <Partners />
      <Tweets />
    </Fragment>
  );
}
