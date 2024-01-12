import ActivityTabs from "@/components/activity-tabs";
import Banner from "@/components/banner";
import { activityTabsData } from "@/lib/data";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <Banner image="/images/banners/news-banner.png">
        <h1 className="text-5xl font-semibold text-white">News and Events</h1>
      </Banner>
      <section className="container">
        <ActivityTabs data={activityTabsData} />
      </section>
    </Fragment>
  );
}
