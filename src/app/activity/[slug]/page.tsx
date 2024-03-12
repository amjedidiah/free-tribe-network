import NotFound from "@/app/not-found";
import ActivityContentAbout from "@/components/activity/activity-content-about";
import ActivityContentTop from "@/components/activity/activity-content-top";
import MoreActivities from "@/components/activity/more-activities";
import Banner from "@/components/shared/banner";
import { fetchActivityBySlug } from "@/lib/actions";
import { Fragment } from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Props) {
  const activity = await fetchActivityBySlug(slug);
  if (!activity) return <NotFound />;

  return (
    <Fragment>
      <Banner image={activity.featuredImage?.node?.mediaItemUrl} />
      <section className="pt-10 flex flex-col gap-20">
        <ActivityContentTop {...activity} />
        <ActivityContentAbout {...activity} />
      </section>
      <MoreActivities isUpcoming={activity.isUpcoming} />
    </Fragment>
  );
}
