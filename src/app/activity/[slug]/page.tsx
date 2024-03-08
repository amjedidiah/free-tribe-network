import ActivityContent from "@/components/activity/activity-content";
import MoreActivities from "@/components/activity/more-activites";
import Banner from "@/components/shared/banner";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <Banner imageTitle="activity-banner" />
      <ActivityContent isUpcoming={false} />
      <MoreActivities isUpcoming={false} />
    </Fragment>
  );
}
