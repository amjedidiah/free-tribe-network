"use client";
import { Suspense, useMemo } from "react";
import ActivityTabs from "@/components/news-events/activity-tabs";
import { defaultNewsEventSection } from "@/lib/data";
import { useTranslations } from "next-intl";

type Props = {
  isUpcoming: boolean;
};

export default function MoreActivities({ isUpcoming }: Props) {
  const initUrlSection = useMemo(
    () => (isUpcoming ? defaultNewsEventSection : "recent-activities"),
    [isUpcoming]
  );
  const t = useTranslations("News.tabs");

  return (
    <section className="py-10 lg:py-14">
      <article className="container h1-gap">
        <h2>{t("more-activities")}</h2>
        <Suspense fallback={null}>
          <ActivityTabs
            initUrlSection={t(initUrlSection)}
            isPrimary={isUpcoming}
            shouldScroll={false}
          />
        </Suspense>
      </article>
    </section>
  );
}
