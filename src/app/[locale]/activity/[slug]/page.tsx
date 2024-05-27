import ActivityContentAbout from "@/components/activity/activity-content-about";
import ActivityContentTop from "@/components/activity/activity-content-top";
import MoreActivities from "@/components/activity/more-activities";
import Banner from "@/components/shared/banner";
import { fetchActivityBySlug } from "@/lib/actions/wordpress";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Fragment } from "react";

type Props = {
  params: {
    slug: string;
    locale: string;
  };
};

export const revalidate = MINUTELY_REVALIDATION;

export default async function Page({ params: { slug, locale } }: Props) {
  const activity = await fetchActivityBySlug(slug);
  unstable_setRequestLocale(locale);

  if (!activity) return notFound();

  return (
    <Fragment>
      <Banner
        image={activity.featuredImage?.node?.mediaItemUrl}
        imageTitle="activity-banner"
      />
      <section className="pt-10 flex flex-col gap-20">
        <ActivityContentTop {...activity} />
        <ActivityContentAbout {...activity} />
      </section>
      <MoreActivities isUpcoming={activity.isUpcoming} />
    </Fragment>
  );
}
