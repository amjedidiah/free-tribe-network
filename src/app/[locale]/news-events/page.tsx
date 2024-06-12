import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { defaultNewsEventSection } from "@/lib/data";
import { PropsWithLocaleParam } from "@/lib/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Fragment, Suspense } from "react";

export const revalidate = MINUTELY_REVALIDATION;

export default async function NewsEvents({ params: { locale } }: PropsWithLocaleParam) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("News");

  return (
    <Fragment>
      <Banner imageTitle="news-banner" title={t("title")} />
      <section className="py-10 lg:py-14">
        <article className="container">
          <Suspense fallback={null}>
            <ActivityTabs
              initUrlSection={defaultNewsEventSection}
              shouldScroll={false}
            />
          </Suspense>
        </article>
      </section>
    </Fragment>
  );
}
