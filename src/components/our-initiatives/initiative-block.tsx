"use client";
import ContentImageClient from "@/components/shared/content-image-client";
import { CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { fetchInitiativeData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/i18n.config";
import { initiatives } from "@/lib/data";
import { Element } from "react-scroll";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import Slider from "@/components/shared/slider";
import SafeHTML from "@/components/shared/safe-html";
import { useTranslations } from "next-intl";

type InitiativeBlockProps = (typeof initiatives)[number];

export default function InitiativeBlock({ name }: InitiativeBlockProps) {
  const t = useTranslations("Our initiative.initiatives");
  const [content, setContent] = useState<TrustedHTML | string>();
  const [images, setImages] = useState<string[]>([]);
  const { handleScroll } = useScrollToSection({
    initUrlSection: initiatives[0].name,
    shouldScroll: false,
  });

  useEffect(() => {
    if (!name) return;

    fetchInitiativeData(name)
      .then((data) => {
        setContent(data.content);
        setImages(data.images);
      })
      .then(handleScroll)
      .catch(console.error);
  }, [handleScroll, name]);

  return (
    <Element name={name} id={t(`${name}.id` as any)}>
      <div className="flex flex-col py-10 gap-6 lg:gap-8">
        <div className="flex flex-col gap-6">
          <div className="h2-gap">
            <h2 className="text-black">{t(`${name}.label` as any)}</h2>
            {content && (
              <SafeHTML
                className="flex flex-col gap-5 [&>div]:flex [&>div]:flex-col [&>div_p]:text-description [&_ul]:pl-8 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:text-description"
                htmlContent={t.raw(`${name}.content` as any)}
              />
            )}
          </div>
          <Link href={`/news-events?initiative=${name}` as any}>
            <Button className="w-fit">{t("View Activities")}</Button>
          </Link>
        </div>
        <Slider shouldFit hasShadow>
          {images.map((i) => (
            <CarouselItem
              key={i}
              className="h-[200px] sm:h-[300px] lg:h-[400px] relative"
            >
              <ContentImageClient
                title={i}
                fill
                sizes="100%"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </CarouselItem>
          ))}
        </Slider>
      </div>
    </Element>
  );
}
