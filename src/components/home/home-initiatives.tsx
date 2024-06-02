import { topInitiativesData } from "@/lib/data";
import ContentImageClient from "@/components/shared/content-image-client";
import { Link } from "@/lib/i18n.config";
import { Button } from "@/components/ui/button";
import SafeHTML from "@/components/shared/safe-html";
import { useTranslations } from "next-intl";

export default function HomeInitiatives() {
  const t = useTranslations("Home.Our initiatives");
  return (
    <section className="bg-secondary-600 py-10 lg:py-14 text-white">
      <article className="container grid gap-6 text-center justify-center [&_p]:max-w-3xl">
        <div className="h2-gap items-center">
          <h2>{t("Heading.title")}</h2>
          <p>{t("Heading.description")}</p>
        </div>

        <div className="grid gap-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {topInitiativesData.map(
              ({ name, label, content, images, ...rest }) => (
                <div key={name} className="flex flex-col gap-5">
                  <div className="h-[244px] w-full relative mx-auto">
                    <ContentImageClient
                      title={images[0]}
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover" }}
                      className="shadow-xl"
                    />
                  </div>
                  <div className="h5-gap">
                    <h5 className="capitalize lg:min-h-16">{label}</h5>
                    <SafeHTML
                      htmlContent={
                        "summary" in rest
                          ? t(`initiatives.${name}.summary` as any)
                          : t.raw(`initiatives.${name}.content` as any)
                      }
                    />
                  </div>
                </div>
              )
            )}
          </div>

          <Link href="/our-initiatives" className="mx-auto">
            <Button>{t("See More")}</Button>
          </Link>
        </div>
      </article>
    </section>
  );
}
