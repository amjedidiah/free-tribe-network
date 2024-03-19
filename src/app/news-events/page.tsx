import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import { HOURLY_REVALIDATION } from "@/lib/constants";
import { defaultNewsEventSection } from "@/lib/data";
import { Fragment, Suspense } from "react";

export const revalidate = HOURLY_REVALIDATION;

export default function NewsEvents() {
  return (
    <Fragment>
      <Banner imageTitle="news-banner" title="News and Events" />
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
