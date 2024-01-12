import React from "react";
import Image from "next/image";
import { trusteeData } from "../card/constant";
import { Trustee } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import the pagination styles
import "swiper/css/effect-fade"; // Import the fade effect styles
import "swiper/css/navigation";
import { trusteeProps } from "../../../types";

type Props = {
  trustees?: trusteeProps[];
  breakpoints?: Record<number, { slidesPerView: number }>;
};

const defaultBreakpoints = {
  10: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 1,
  },
};

const Trustees = ({ trustees = trusteeData, breakpoints = {} }: Props) => {
  return (
    <section className="flex flex-col lg:px-24 lg:h-136 justify-around sm:p-12">
      <div className="flex flex-row justify-between items-center p-12 sm:p-0">
        <h2>Board of Trustees</h2>
        <span className="w-28 flex flex-row justify-around">
          <Image
            alt="right-arrow"
            src="/right-arrow.svg"
            width="30"
            height="30"
          />
          <Image
            alt="left-arrow"
            src="/left-arrow.svg"
            width="30"
            height="30"
          />
        </span>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        spaceBetween={16}
        slidesPerView="auto"
        breakpoints={{ ...defaultBreakpoints, ...breakpoints }}
        centeredSlides
        centeredSlidesBounds
        centerInsufficientSlides
      >
        {trustees.map((slide, i) => (
          <SwiperSlide key={slide.title + i}>
            <Trustee
              role={slide.role}
              imagePath={slide.imagePath}
              title={slide.title}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trustees;
