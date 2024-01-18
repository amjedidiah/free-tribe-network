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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { initiatives } from "@/lib/data";
import { Element } from "react-scroll";
import useScrollToSection from "@/hooks/use-scroll-to-section";

type InitiativeBlockProps = (typeof initiatives)[number];

type InitiativeDataImage = {
  src: string;
  alt: string;
};

export const initiativeData = {
  "star-project": {
    content: `
  <div>
    <p>
      A public health project that seeks to capture and reduce the witnessing of
      interparental violence, and the intergenerational transmission of violence
      to adolescents. The project aims to improve institutional supportive
      structures within public secondary schools, to discourage the acceptance
      or use of violence in future relationships. It combines a powerful blend
      of research and public health programs to address reproductive health and
      family wellbeing.
    </p>
  </div>

  <div>
    <h4 class="heading"> Identifying the Issue! </h4>
    <p>
      We observed that Intimate Partner Violence (Interparental Violence) had a
      significant effect on the physical, mental, and social well-being of
      children and adolescents. Children witnessing these violent behaviours
      were prone to exhibit difficulties in social interactions, endured
      emotional strain, and other psychological challenges, building into
      several negative outcomes such as bullying, unhealthy relationships, low
      self-esteem, substance abuse, and even criminal behaviours, with effects
      persisting through adulthood.
    </p>
  </div>

  <div>
    <h4 class="heading">Our Approach!</h4>
    <p>
      The Stand Against Recycled Violence (STAR) Project: an initiative to
      counter the intergenerational recycling of violence. We combined a
      powerful blend of research and public health programs, to address the
      incidence of interparental violence, bullying (peer violence), and
      violence justification. The strategies of the STAR project help us to
      improve institutional supportive structures within secondary schools, and
      to discourage the acceptance and use of violence in future relationships.
      Offerings:
      <ul>
        <li>Baseline survey</li>
        <li>Teacher training</li>
        <li>Student training</li>
        <li>Free Tribe Institutional Club</li>
        <li>Institutional Supervising committee</li>
        <li>Monitoring &amp; Evaluation</li>
      </ul>
    </p>
  </div>
`,
    images: [{ src: "/images/star.png", alt: "star" }],
  },
  repromatters: {
    content: `<div><p>A bi-monthly program utilizing real life stories, medical knowledge, public health expertise, and the wide reach of the social media space, to discuss important issues affecting reproductive health and family wellbeing. Topics covered will center around women’s health, men’s health, children and adolescent health and well-being.</p></div>`,
    images: [{ src: "/images/repro.png", alt: "repro" }],
  },
  "free-tribe-boost-camp": {
    content: `<div><p>A bi-monthly capacity building program for staff and volunteers of the Free Tribe Network, set to improve corporate work skills, teach industry-relevant skills, and foster bonding amongst members of the Free Tribe Network.</p></div>`,
    images: [{ src: "/images/boost.png", alt: "boost" }],
  },
  "free-tribe-helpline": {
    content: `<div><p>A social service for telephone support, access to information, advice, informed interventions, and referral to reproductive and family health professionals.</p></div>`,
    images: [{ src: "/images/helpline.png", alt: "helpline" }],
  },
  "free-tribe-clubs": {
    content: `<div><p>These are safe spaces set to promote open conversations, improve social support, enhance monitoring and evaluation, and improve self-led initiatives and re-intervention tactics, to ensure sustainable improvements in reproductive and family health outcomes.</p></div>`,
    images: [{ src: "/images/clubs.png", alt: "clubs" }],
  },
  "rfh-advocacy": {
    content: `<div><p>This includes rallies, campaigns, weekly advocacy messages (#TeachTuesday and #FactFriday), and media programs to promote and inspire positive health behaviours.</p></div>`,
    images: [{ src: "/images/rfh.png", alt: "rfh" }],
  },
};

const fetchInitiativeData = async (name: string) =>
  Promise.resolve(initiativeData[name as keyof typeof initiativeData]);

export default function InitiativeBlock({ name, label }: InitiativeBlockProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState<TrustedHTML>(``);
  const [images, setImages] = useState<InitiativeDataImage[]>([]);
  const { handleScroll } = useScrollToSection({
    initUrlSection: initiatives[0].name,
    shouldScroll: false,
  });

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!name) return;

    fetchInitiativeData(name)
      .then((data) => {
        setContent(data.content);
        setImages(data.images);
      })
      .then(handleScroll);
  }, [handleScroll, name]);

  return (
    <Element name={name} id={name}>
      <div className="flex flex-col py-10 gap-6 lg:gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <h2 className="text-black font-semibold text-2xl lg:text-4xl">
              {label}
            </h2>
            <div
              className="flex flex-col gap-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-4 [&_.heading]:text-xl [&_.heading]:lg:text-2xl [&>div_p]:text-description [&_ul]:pl-8 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:text-description"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
          <Link href={`/news-events?initiative=${name}`}>
            <Button className="w-fit">View Activities</Button>
          </Link>
        </div>
        <div className="relative">
          <Carousel
            className="relative"
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
              {images.map((i) => (
                <CarouselItem key={i.alt}>
                  <Image
                    src={i.src}
                    alt={i.alt}
                    height={407}
                    width={1219}
                    className="rounded-lg"
                  />
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
      </div>
    </Element>
  );
}
