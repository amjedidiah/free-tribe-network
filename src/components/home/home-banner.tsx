"use client";
import { homeBannerData } from "@/lib/data";
import Slider from "@/components/shared/slider";
import HomeBannerSlide from "@/components/home/home-banner-slide";

export default function HomeBanner() {
  return (
    <Slider hasShadow delay={15000}>
      {homeBannerData.map((item) => (
        <HomeBannerSlide key={item.title} {...item} />
      ))}
    </Slider>
  );
}
