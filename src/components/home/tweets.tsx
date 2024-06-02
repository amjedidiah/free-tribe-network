import { useTranslations } from "next-intl";
import Script from "next/script";

export default function Tweets() {
  const t = useTranslations("Home.Tweets");

  return (
    <section className="py-10 lg:pt-20 max-w-full">
      <article className="container h3-gap">
        <h3 className="text-black">{t("title")}</h3>
        <div id="tweets" className="max-w-full">
          <a
            className="twitter-timeline"
            data-height="576"
            href="https://twitter.com/freetribenetwrk?ref_src=twsrc%5Etfw"
          >
            {t("link")}
          </a>
          <Script src="https://platform.twitter.com/widgets.js" />
        </div>
      </article>
    </section>
  );
}
