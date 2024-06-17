import ActivityContent from "@/components/activity/activity-content";
import ActivityContentContainer from "@/components/activity/activity-content-container";
import MoreActivities from "@/components/activity/more-activities";
import Banner from "@/components/shared/banner";
import { fetchActivityBySlug } from "@/lib/actions/wordpress";
import { MINUTELY_REVALIDATION } from "@/lib/constants";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

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
    <ActivityContentContainer
      familiars={JSON.parse(activity.newsFieldGroup.sharedid)}
    >
      <Banner
        image={activity.featuredImage?.node?.mediaItemUrl}
        imageTitle="activity-banner"
      />
      <ActivityContent activity={activity} />
      <MoreActivities isUpcoming={activity.isUpcoming} />
    </ActivityContentContainer>
  );
}
