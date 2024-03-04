"use client";
import SafeHTML from "@/components/shared/safe-html";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bots } from "@/lib/data";
import { useCallback, useState } from "react";
import BotSlide from "@/components/who-we-are/bot-slide";
import Image from "next/image";

export default function Bot() {
  const [bot, setBot] = useState(0);
  const handleSwipe = useCallback((count = 0) => setBot(count), []);
  const [shouldSlideLeft, setShouldSlideLeft] = useState(false);
  const [shouldSlideRight, setShouldSlideRight] = useState(false);

  const handleShouldSlideLeft = useCallback(() => {
    setShouldSlideLeft(true);

    setTimeout(() => {
      setShouldSlideLeft(false);
    }, 500);
  }, []);

  const handleShouldSlideRight = useCallback(() => {
    setShouldSlideRight(true);

    setTimeout(() => {
      setShouldSlideRight(false);
    }, 500);
  }, []);

  return (
    <section className="py-10 lg:pt-14 lg:pb-16" id="bot">
      <article className="container grid gap-9">
        <div className="flex justify-between items-center">
          <h2 className="text-black">Board of Trustees</h2>
          <div className="flex-1 flex items-center gap-10 justify-end">
            <div
              className="w-12 h-12 relative shadow rounded-full"
              onClick={handleShouldSlideLeft}
            >
              <Image
                alt="left-arrow"
                src="/images/left-arrow.svg"
                sizes="100%"
                fill
              />
            </div>
            <div
              className="w-12 h-12 relative shadow rounded-full"
              onClick={handleShouldSlideRight}
            >
              <Image
                alt="right-arrow"
                src="/images/right-arrow.svg"
                sizes="100%"
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-contain lg:w-[415px] relative">
            <div className="bg bg-[rgba(129,1,77,0.3)] w-11 h-full absolute top-0 left-0 z-[2] pointer-events-none" />
            <div className="bg bg-[rgba(129,1,77,0.3)] w-11 h-full absolute top-0 right-0 z-[2] pointer-events-none" />
            <div className="flex items-center h-full z-0 [&>.swiper]:static">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                scrollbar={{ draggable: true }}
                spaceBetween={25}
                slidesPerView={2}
                centeredSlides
                centerInsufficientSlides
                loop
                autoHeight={false}
                navigation
                className="[&_.swiper-button-prev]:absolute [&_.swiper-button-prev]:z-[3] [&_.swiper-button-prev]:top-1/2 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-next]:absolute [&_.swiper-button-next]:z-[3] [&_.swiper-button-next]:right-0 [&_.swiper-button-next]:top-1/2 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:w-10 [&_.swiper-pagination.swiper-pagination-bullets-dynamic]:bottom-0 [&_.swiper-pagination-bullet]:w-5 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-primary-500 [&_.swiper-pagination-bullet]:rounded"
              >
                {bots.map(({ name, src }) => (
                  <SwiperSlide key={name}>
                    <BotSlide
                      src={src}
                      name={name}
                      onSwipe={handleSwipe}
                      shouldSlideLeft={shouldSlideLeft}
                      shouldSlideRight={shouldSlideRight}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="py-20 px-12 flex-1 flex flex-col gap-7 text-white bg-primary-900 lg:min-h-[508px] xl:min-h-[412px] 2xl:min-h-[364px]">
            <div>
              <p className="font-bold lg:text-xl">{bots[bot].name}</p>
              <p className="lg:text-lg">{bots[bot].title}</p>
            </div>
            <SafeHTML htmlContent={bots[bot].description} />
          </div>
        </div>
      </article>
    </section>
  );
}
