"use client";
import Link from "next/link";
import Banner from "@/components/shared/banner";
import { Link as ScrollLink } from "react-scroll";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const bannerData = [
  {
    image: "/images/banners/home-banner/home-banner-1.png",
    title:
      "Inspiring actions for sustained reproductive health and family well-being",
    picturePosition: "center right",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "At the Free Tribe Network, we promote reproductive wellness, and family well-being. We provide charitable services in the forms of programs, projects and research, to translate knowledge into perception, and perceptions into actions and behaviours.",
  },
  {
    image: "/images/banners/home-banner/home-banner-2.png",
    title: "Mastery",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "A relentless pursuit of excellence by leveraging on critical experience, expertise, and scientific evidence, to tailor our initiatives into best practices.",
  },
  {
    image: "/images/banners/home-banner/home-banner-3.png",
    title: "Social Justice",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "We believe that every individual should be treated with dignity and respect, and their fundamental human rights should be protected.",
  },
  {
    image: "/images/banners/home-banner/home-banner-4.png",
    title: "Equity",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "We believe in a fair distribution of services and resources, and equal access to opportunities, irrespective of age, gender, race, education, ethnicity, religion, or personal beliefs.",
  },
  {
    image: "/images/banners/home-banner/home-banner-5.png",
    title: "Community",
    picturePosition: "center",
    wrapperClassName: "max-xl:bg-[rgba(5,83,118,0.45)]",
    content:
      "Our unity and collective efforts towards a shared vision fostering our growth, strength, and sustained impact.",
  },
];

export default function HomeBanner() {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        className="relative rounded-lg shadow-xl"
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
          {bannerData.map(({ content, ...rest }, i) => (
            <CarouselItem key={i} className=" relative">
              <Banner {...rest}>
                <div className="flex flex-col gap-6 mt-6">
                  <p className="max-w-[41rem]">{content}</p>

                  <div className="flex items-center gap-6 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem] [&_a]:shadow-md">
                    <Link
                      href="/donate"
                      className=" bg-primary-400 text-white font-semibold"
                    >
                      Support
                    </Link>
                    <ScrollLink
                      to="mailing-list"
                      smooth
                      className="border border-white cursor-pointer"
                    >
                      Join our mailing list
                    </ScrollLink>
                  </div>
                </div>
              </Banner>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-x-1/2 bottom-[4%] flex justify-center">
        <div className="flex gap-1 lg:gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <span
              onClick={() => api?.scrollTo(index)}
              key={index}
              className={cn(
                "w-7 lg:w-14 h-1 lg:h-2 border-none",
                index + 1 === current ? "bg-primary-500" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
