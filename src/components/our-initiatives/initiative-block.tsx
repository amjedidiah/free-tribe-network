"use client";
import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { fetchInitiativeData } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { initiatives } from "@/lib/data";
import { Element } from "react-scroll";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import Slider from "@/components/shared/slider";
import SafeHTML from "@/components/shared/safe-html";

type InitiativeBlockProps = (typeof initiatives)[number];

type InitiativeDataImage = {
  src: string;
  alt: string;
};
export default function InitiativeBlock({ name, label }: InitiativeBlockProps) {
  const [content, setContent] = useState<TrustedHTML | string>();
  const [images, setImages] = useState<InitiativeDataImage[]>([]);
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
    <Element name={name} id={name}>
      <div className="flex flex-col py-10 gap-6 lg:gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <h2 className="text-black font-semibold text-2xl lg:text-4xl">
              {label}
            </h2>
            {content && (
              <SafeHTML
                className="flex flex-col gap-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-4 [&_.heading]:text-xl [&_.heading]:lg:text-2xl [&>div_p]:text-description [&_ul]:pl-8 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:text-description"
                htmlContent={content}
              />
            )}
          </div>
          <Link href={`/news-events?initiative=${name}`}>
            <Button className="w-fit">View Activities</Button>
          </Link>
        </div>
        <Slider>
          {images.map((i) => (
            <CarouselItem
              key={i.alt}
              className="h-[200px] sm:h-[300px] lg:h-[400px] relative"
            >
              <Image
                src={i.src}
                alt={i.alt}
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
