import { Link } from "@/lib/i18n.config";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="mt-36 py-10 lg:py-14">
      <article className="container text-center">
        <h1 className="font-extralight text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem]">
          {t("title")}
        </h1>
        <div className="relative flex flex-col gap-2 items-center">
          <p>{t("text")}</p>
          <Link
            href="/"
            className="bg-primary-500 text-white px-5 py-3 rounded shadow-md"
          >
            {t("action")}
          </Link>
        </div>
      </article>
    </section>
  );
}
