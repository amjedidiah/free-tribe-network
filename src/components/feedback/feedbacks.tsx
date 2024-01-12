import React from "react";
import { feedbackData } from "../card/constant";
import { Feedback } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import the pagination styles
import "swiper/css/effect-fade"; // Import the fade effect styles
import "swiper/css/navigation";
import { feedbackProps } from "../../../types";

type Props = {
  feedbacks?: feedbackProps[];
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

const Feedbacks = ({ feedbacks = feedbackData, breakpoints = {} }: Props) => {
  return (
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
      {feedbacks.map((slide, i) => (
        <SwiperSlide key={slide.title + i}>
          <Feedback
            role={slide.role}
            imagePath={slide.imagePath}
            title={slide.title}
            description={slide.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Feedbacks;
