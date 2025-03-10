"use client";
import { homeBannerData } from "@/lib/data";
import Banner from "@/components/shared/banner";
import { Link } from "@/i18n/navigation";
import { Link as ScrollLink } from "react-scroll";
import { CarouselItem } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

type HomeBannerSlideProps = (typeof homeBannerData)[number];

export default function HomeBannerSlide({
  ...rest
}: Readonly<HomeBannerSlideProps>) {
  const t = useTranslations("Home.Banners");

  return (
    <CarouselItem className="relative">
      <Banner {...rest} title={t(`${rest.title}.title` as any)}>
        <div className="flex flex-col gap-6">
          <p className="max-w-[41rem]">{t(`${rest.title}.content` as any)}</p>

          <div className="flex items-center gap-6 [&_a]:py-[0.625rem] [&_a]:px-[1.125rem] [&_a]:rounded-[0.5rem] [&_a]:shadow-md">
            <Link href="/donate" className=" bg-primary-400 text-white">
              {t("Support")}
            </Link>
            <ScrollLink
              to="mailing-list"
              smooth
              className="border border-white cursor-pointer"
              href=""
            >
              {t("Join")}
            </ScrollLink>
          </div>
        </div>
      </Banner>
    </CarouselItem>
  );
}
