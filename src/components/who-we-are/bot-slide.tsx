"use client";
import ContentImageClient from "@/components/shared/content-image-client";
import { useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type BotSlideProps = {
  name: string;
  src: string;
  onSwipe: (index: number) => void;
  shouldSlideLeft: boolean;
  shouldSlideRight: boolean;
};

export default function BotSlide({
  src,
  onSwipe,
  shouldSlideLeft,
  shouldSlideRight,
}: BotSlideProps) {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  useEffect(() => {
    onSwipe(swiper.realIndex);
  }, [swiper.realIndex, onSwipe]);

  useEffect(() => {
    if (shouldSlideLeft) swiper.slidePrev();
  }, [shouldSlideLeft, swiper]);

  useEffect(() => {
    if (shouldSlideRight) swiper.slideNext();
  }, [shouldSlideRight, swiper]);

  return (
    <ContentImageClient
      title={src}
      width={288}
      height={296}
      style={{ objectFit: "cover" }}
      className={cn("shadow-xl mx-auto", {
        "scale-[75%]": !swiperSlide.isActive,
      })}
    />
  );
}
