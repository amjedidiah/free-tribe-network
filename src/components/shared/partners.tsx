import { partners } from "@/lib/data";
import ContentImageClient from "@/components/shared/content-image-client";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className="py-10">
      <article className="container grid gap-8 text-center">
        <h2 className="text-black">{t("Heading.title")}</h2>
        <div className="flex flex-wrap justify-around gap-5">
          {partners.map((name) => (
            <ContentImageClient key={name} title={name} height={87} />
          ))}
        </div>
      </article>
    </section>
  );
}
