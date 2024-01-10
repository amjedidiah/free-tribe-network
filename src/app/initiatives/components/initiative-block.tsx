"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InitiativeBlockProps = {
  title: string;
  subText: string;
  image: { src: string; alt: string }[];
};

export default function InitiativeBlock({ title, subText, image }: InitiativeBlockProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="space-y-2 lg:space-y-3">
      <h2 className="font-semibold text-xl lg:text-3xl">{title}</h2>
      <p className="tracking-wide">{subText}</p>
      <span>View Activity</span>
      <div className="relative">
        <Carousel
          className="py-2 relative"
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {image.map((i) => (
              <CarouselItem key={i.alt}>
                <Image
                  className="w-full object-cover rounded-lg"
                  src={i.src}
                  alt={i.alt}
                  height={400}
                  width={1200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-x-1/2 bottom-[10%] text-sm flex justify-center text-muted-foreground">
          <div className="flex gap-1 lg:gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <span
                onClick={() => api?.scrollTo(index)}
                key={index}
                className={cn(
                  "w-4 lg:w-16 h-1 lg:h-3  border-black",
                  index + 1 === current ? "bg-black border-black" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
