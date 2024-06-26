"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const BotSlider = dynamic(() => import("./bot-slider"), {
  loading: () => null,
});

export default function Bot() {
  const t = useTranslations("Who we are.BOT");
  const tMenu = useTranslations("Nav.menu");

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
    <section
      className="py-10 lg:pt-14 lg:pb-16"
      id={tMenu("BOT").toLowerCase()}
    >
      <article className="container grid gap-9">
        <div className="flex justify-between items-center">
          <h2 className="text-black">{t("title")}</h2>
          <div className="flex-1 flex items-center gap-10 justify-end">
            <div
              className="w-12 h-12 relative shadow rounded-full cursor-pointer"
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
              className="w-12 h-12 relative shadow rounded-full cursor-pointer"
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
        <BotSlider
          shouldSlideLeft={shouldSlideLeft}
          shouldSlideRight={shouldSlideRight}
        />
      </article>
    </section>
  );
}
