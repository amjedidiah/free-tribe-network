import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import { defaultNewsEventSection } from "@/lib/data";
import { Fragment } from "react";

export default function NewsEvents() {
  return (
    <Fragment>
      <Banner imageTitle="news-banner" title="News and Events" />
      <section className="py-10 lg:py-14">
        <article className="container">
          <ActivityTabs
            initUrlSection={defaultNewsEventSection}
            shouldScroll={false}
          />
        </article>
      </section>
    </Fragment>
  );
}
