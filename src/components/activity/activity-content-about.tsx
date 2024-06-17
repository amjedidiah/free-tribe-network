import { cn } from "@/lib/utils";
import SafeHTML from "@/components/shared/safe-html";
import { IActivity } from "@/lib/types";
import { Fragment } from "react";
import { getTranslations } from "next-intl/server";

type Props = Pick<IActivity, "isUpcoming" | "newsFieldGroup" | "content">;

export default async function ActivityContentAbout({
  isUpcoming,
  newsFieldGroup: { date, time, venue, venueNotes, schedule, scheduleNotes },
  content,
}: Props) {
  const t = await getTranslations("Activity.Titles");
  return (
    <article className="container h1-gap">
      <h2>{t("About")}</h2>
      <div
        className={cn(
          "flex flex-col gap-3 [&_h5]:font-semibold [&_.note]:p-3 [&_.note]:my-3",
          {
            "[&_.note]:text-primary-800 [&_.note]:bg-primary-50": isUpcoming,
            "[&_.note]:text-secondary-800 [&_.note]:bg-secondary-50":
              !isUpcoming,
          }
        )}
      >
        <div>
          <h5>{t("Date")}</h5>
          <p>{date}</p>
        </div>
        <div>
          <h5>{t("Time")}</h5>
          <p>{time}</p>
        </div>
        <div>
          <h5>{t("Venue")}</h5>
          <p>{venue}</p>
        </div>
        {venueNotes && (
          <div className="note">
            <SafeHTML htmlContent={venueNotes} />
          </div>
        )}
        {schedule && (
          <Fragment>
            <h5>{t("Schedule")}</h5>
            <div className="[&_div]:flex [&_div]:flex-col [&_div]:gap-3">
              <SafeHTML htmlContent={schedule} />
            </div>
          </Fragment>
        )}
        {scheduleNotes && (
          <div className="note">
            <SafeHTML htmlContent={scheduleNotes} />
          </div>
        )}
        {content && (
          <div className="[&_div]:flex [&_div]:flex-col [&_div]:gap-3">
            <SafeHTML htmlContent={content} />
          </div>
        )}
      </div>
    </article>
  );
}
