import ContentImage from "@/components/shared/content-image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Support() {
  const t = useTranslations("Support");

  return (
    <section
      className="relative z-[2] radial-primary"
      id={t("id").toLowerCase().replaceAll(" ", "-")}
    >
      <div className="hidden lg:block -z-[2] absolute inset-y-0 lg:-left-52 xl:-left-44 2xl:-left-20 h-full w-[calc(100vw/2)] xl:w-[calc(100vw/2-150px)] 2xl:w-[calc(100vw/2-300px)]">
        <ContentImage
          title="ankara-2_skhkdg"
          className="max-h-full"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-18 container pt-20 lg:pt-40">
        <div className="order-last lg:order-first max-lg:max-h-96 overflow-hidden">
          <ContentImage
            title="support_ssnynq"
            width={674}
            height={522}
            className="w-full max-w-full overflow-hidden"
          />
        </div>
        <div className="text-white flex flex-col gap-7">
          <div className="h2-gap max-w-md">
            <h2>{t("Heading.title")}</h2>
            <p>{t("Heading.description")}</p>
          </div>
          <Link href="/donate">
            <Button className="bg-white hover:bg-white py-2 px-4 w-fit text-primary">
              {t("Donate")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
