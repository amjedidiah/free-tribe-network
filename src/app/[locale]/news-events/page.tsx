import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import { getMetadata } from "@/lib/actions/metadata";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { defaultNewsEventSection } from "@/lib/data";
import { PropsWithLocaleParam } from "@/lib/types";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Fragment, Suspense } from "react";

export const revalidate = MINUTELY_REVALIDATION;

export const generateMetadata = ({
  params: { locale },
}: PropsWithLocaleParam) =>
  getMetadata(
    locale,
    "https://res.cloudinary.com/amjedidiah/image/upload/v1741477252/ftn/news-banner_x3jjv9.webp",
    "Layout.metaData.news"
  );

export default async function NewsEvents({
  params: { locale },
}: Readonly<PropsWithLocaleParam>) {
  setRequestLocale(locale);
  const t = await getTranslations("News");

  return (
    <Fragment>
      <Banner imageTitle="news-banner_x3jjv9" title={t("title")} />
      <section className="py-10 lg:py-14">
        <article className="container">
          <Suspense fallback={null}>
            <ActivityTabs
              initUrlSection={t(`tabs.${defaultNewsEventSection}` as any)}
              shouldScroll={false}
            />
          </Suspense>
        </article>
      </section>
    </Fragment>
  );
}
