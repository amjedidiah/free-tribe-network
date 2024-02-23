"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type SliderProps = {
  delay?: number;
  hasShadow?: boolean;
  shouldFit?: boolean;
  dots?: {
    activeClassName?: string;
    className?: string;
    bottomClassName?: string;
  };
  contentClassName?: string;
} & PropsWithChildren;

export default function Slider({
  children,
  shouldFit = false,
  delay = 2000,
  hasShadow = true,
  dots = {
    activeClassName: "bg-primary-500",
    className: "w-7 lg:w-14 h-1 lg:h-2 border-none",
    bottomClassName: "bottom-[4%]",
  },
  contentClassName = "max-sm:max-w-[100vw]",
}: SliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay, stopOnInteraction: true }));
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));

    // slide next on click
    api.on("pointerDown", () => setClickCount((prev) => prev + 1));

    if (shouldFit)
      api.on("scroll", () => {
        const current = api.selectedScrollSnap();

        api.slideNodes().forEach((slide, index) => {
          if (index !== current) slide.classList.add("h-0");
          else slide.classList.remove("h-0");
        });
      });
  }, [api, shouldFit]);

  useEffect(() => {
    if (clickCount % 1) return;
    api?.scrollNext();
  }, [api, clickCount]);

  return (
    <div className="relative">
      <Carousel
        className={cn({ "shadow-xl": hasShadow }, "relative rounded-lg")}
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className={contentClassName}>
          {children}
        </CarouselContent>
      </Carousel>
      <div
        className={cn(
          "absolute inset-x-1/2 flex justify-center",
          dots.bottomClassName
        )}
      >
        <div className="flex gap-1 lg:gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <span
              onClick={() => api?.scrollTo(index)}
              key={index}
              className={cn(
                dots.className,
                index + 1 === current ? dots.activeClassName : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
