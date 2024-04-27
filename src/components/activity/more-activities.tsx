"use client";
import { Suspense, useMemo } from "react";
import ActivityTabs from "@/components/news-events/activity-tabs";
import { defaultNewsEventSection } from "@/lib/data";

type Props = {
  isUpcoming: boolean;
};

export default function MoreActivities({ isUpcoming }: Props) {
  const initUrlSection = useMemo(
    () => (isUpcoming ? defaultNewsEventSection : "recent-activities"),
    [isUpcoming]
  );

  return (
    <section className="py-10 lg:py-14">
      <article className="container h1-gap">
        <h2>More Activities</h2>
        <Suspense fallback={null}>
          <ActivityTabs
            initUrlSection={initUrlSection}
            isPrimary={isUpcoming}
            shouldScroll={false}
          />
        </Suspense>
      </article>
    </section>
  );
}
