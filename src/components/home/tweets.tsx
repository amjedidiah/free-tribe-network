"use client";
import { useLocale, useTranslations } from "next-intl";
import { memo, useEffect } from "react";

function Tweets() {
  const t = useTranslations("Home.Tweets");
  const locale = useLocale();

  useEffect(() => {
    // Create and add the script tag when the component mounts
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Return a cleanup function to remove the script when unmounting
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only on mount/unmount

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
        </div>
      </article>
    </section>
  );
}

export default memo(Tweets);
