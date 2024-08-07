"use client";
import SafeHTML from "@/components/shared/safe-html";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { bots } from "@/lib/data";
import { useCallback, useState } from "react";
import BotSlide from "@/components/who-we-are/bot-slide";
import { useTranslations } from "next-intl";

type Props = {
  shouldSlideLeft: boolean;
  shouldSlideRight: boolean;
};

export default function BotSlider({
  shouldSlideLeft,
  shouldSlideRight,
}: Props) {
  const [bot, setBot] = useState(0);
  const t = useTranslations("Who we are.BOT");

  const handleSwipe = useCallback((count = 0) => setBot(count), []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
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
            className="[&_.swiper-wrapper]:items-center [&_.swiper-button-prev]:absolute [&_.swiper-button-prev]:z-[3] [&_.swiper-button-prev]:top-1/2 [&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-next]:absolute [&_.swiper-button-next]:z-[3] [&_.swiper-button-next]:right-0 [&_.swiper-button-next]:top-1/2 [&_.swiper-button-next]:h-10 [&_.swiper-button-next]:w-10 [&_.swiper-pagination.swiper-pagination-bullets-dynamic]:bottom-0 [&_.swiper-pagination-bullet]:w-5 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:bg-primary-500 [&_.swiper-pagination-bullet]:rounded"
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
          <p className="font-bold lg:text-xl">
            {t(`${bots[bot].name}.name` as any)}
          </p>
          <p className="lg:text-lg">{t(`${bots[bot].name}.title` as any)}</p>
        </div>
        <SafeHTML htmlContent={t.raw(`${bots[bot].name}.description` as any)} />
      </div>
    </div>
  );
}
