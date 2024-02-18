import { Fragment } from "react";
import HomeBanner from "@/components/home/home-banner";
import HomeInitiatives from "@/components/home/home-initiatives";
import HomeNewsEvents from "@/components/home/home-news-events";
import HomeOurVision from "@/components/home/home-our-vision";
import Testimonials from "@/components/shared/testimonials";
import Support from "@/components/shared/support";
import Team from "@/components/shared/team";
import Partners from "@/components/shared/partners";
import Tweets from "@/components/home/tweets";

export default function Home() {
  return (
    <Fragment>
      <HomeBanner />
      <HomeOurVision />
      <HomeNewsEvents />
      <HomeInitiatives />
      <Testimonials />
      <Team />
      <Support />
      <Partners />
      <Tweets />
    </Fragment>
  );
}
