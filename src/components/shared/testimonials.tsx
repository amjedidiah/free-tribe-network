import { testimonials } from "@/lib/data";
import ContentImageClient from "@/components/shared/content-image-client";
import Slider from "@/components/shared/slider";
import { CarouselItem } from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations('Testimonials')

  return (
    <section className="py-10 pb-20 lg:py-24 lg:pb-32" id={t("id")}>
      <article className="container">
        <Slider
          dots={{
            activeClassName: "bg-black",
            className: "w-[0.625rem] h-[0.625rem] rounded-full top-10",
            bottomClassName: "-bottom-7",
          }}
          contentClassName="max-sm:max-w-[calc(100vw-2rem)]"
        >
          {testimonials.map(({ name, src, ...rest }) => (
            <CarouselItem
              key={name}
              className="relative flex flex-col justify-end"
            >
              <div className="grid text-center gap-8">
                <h3 className="text-description text-xl lg:text-2xl font-light">
                  {t(`${name}.testimony` as any)}
                </h3>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full relative">
                    <ContentImageClient
                      title={src}
                      className="rounded-full"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                      sizes="100%"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 text-lg font-medium">
                      {t(`${name}.name` as any)}
                    </p>
                    {"title" in rest && (
                      <p className="text-gray-500">
                        {t(`${name}.title` as any)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Slider>
      </article>
    </section>
  );
}
