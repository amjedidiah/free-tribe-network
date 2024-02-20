"use client";
import Image from "next/image";
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
  name,
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
    <Image
      src={src}
      alt={name}
      width={288}
      height={296}
      style={{ objectFit: "cover" }}
      className={cn("shadow-xl", {
        "border-ankara-1": swiperSlide.isActive,
      })}
    />
  );
}
