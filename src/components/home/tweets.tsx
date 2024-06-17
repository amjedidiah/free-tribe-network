import { useLocale, useTranslations } from "next-intl";
import { memo } from "react";

function Tweets() {
  const t = useTranslations("Home.Tweets");
  const locale = useLocale();

  return (
    <section className="py-10 lg:pt-20 max-w-full">
      <article className="container h3-gap">
        <h3 className="text-black">{t("title")}</h3>
        <div id="tweets" className="max-w-full" suppressHydrationWarning>
          <a
            className="twitter-timeline"
            data-lang={locale}
            data-height="576"
            data-aria-polite="assertive"
            href="https://twitter.com/freetribenetwrk?ref_src=twsrc%5Etfw"
          >
            {t("link")}
          </a>
          <script async src="https://platform.twitter.com/widgets.js" />
        </div>
      </article>
    </section>
  );
}

export default memo(Tweets);
