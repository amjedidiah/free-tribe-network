import ActivityTabs from "@/components/news-events/activity-tabs";
import Banner from "@/components/shared/banner";
import { activityTabsData } from "@/lib/data";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <Banner image="/images/banners/news-banner.png" title="News and Events" />
      <section className="container">
        <ActivityTabs data={activityTabsData} />
      </section>
    </Fragment>
  );
}
