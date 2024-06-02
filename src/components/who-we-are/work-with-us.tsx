import ContentImage from "@/components/shared/content-image";
import { Button } from "@/components/ui/button";
import { currentVacanciesLink, volunteerNowLink } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function WorkWithUs() {
  const t = useTranslations("Who we are.Work with us");
  return (
    <section className="relative z-[2] bg-secondary-500" id="work-with-us">
      <div className="hidden lg:block -z-[2] absolute inset-y-0 lg:-right-52 xl:-right-44 2xl:-right-20 h-full w-[calc(100vw/2)] xl:w-[calc(100vw/2-150px)] 2xl:w-[calc(100vw/2-300px)]">
        <ContentImage
          title="ankara-3"
          className="max-h-full"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100%"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 container pt-20 lg:pt-0">
        <div className="order-last lg:pt-40 max-lg:max-h-96 overflow-hidden">
          <ContentImage
            title="work-with-us"
            width={674}
            height={522}
            className="w-full max-w-full overflow-hidden"
          />
        </div>
        <div className="text-white flex flex-col gap-7 justify-center">
          <div className="h2-gap">
            <h2>{t("title")}</h2>
            <p>{t("content")}</p>
          </div>
          <div className="flex gap-6">
            <a href={volunteerNowLink} target="_blank">
              <Button className="bg-primary-500 hover:bg-primary-500 py-2 px-4 w-fit text-white">
                {t("Volunteer Now")}
              </Button>
            </a>

            <a href={currentVacanciesLink} target="_blank">
              <Button className="bg-transparent hover:bg-transparent py-2 px-4 w-fit text-white border border-white">
                {t("Job Vacancies")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
