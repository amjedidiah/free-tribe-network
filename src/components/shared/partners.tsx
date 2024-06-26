import { partners } from "@/lib/data";
import ContentImage from "@/components/shared/content-image";
import { getTranslations } from "next-intl/server";

export default async function Partners() {
  const t = await getTranslations("Partners");

  return (
    <section className="py-10" id={t("Heading.id")}>
      <article className="container grid gap-8 text-center">
        <h2 className="text-black">{t("Heading.title")}</h2>
        <div className="flex flex-wrap justify-around gap-5">
          {partners.map((name) => (
            <ContentImage key={name} title={name} height={87} />
          ))}
        </div>
      </article>
    </section>
  );
}
