"use client";
import { homeBannerData } from "@/lib/data";
import Banner from "@/components/shared/banner";
import { Link } from "@/lib/i18n.config";
import { Link as ScrollLink } from "react-scroll";
import { CarouselItem } from "@/components/ui/carousel";

type HomeBannerSlideProps = (typeof homeBannerData)[number];

export default function HomeBannerSlide({
  content,
  ...rest
}: HomeBannerSlideProps) {
  return (
    <CarouselItem className="relative">
      <Banner {...rest}>
        <div className="flex flex-col gap-6">
          <p className="max-w-[41rem]">{content}</p>

          <div className="flex items-center gap-6 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem] [&_a]:shadow-md">
            <Link href="/donate" className=" bg-primary-400 text-white">
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
  );
}
