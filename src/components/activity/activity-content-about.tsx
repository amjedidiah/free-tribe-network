import { cn } from "@/lib/utils";
import SafeHTML from "@/components/shared/safe-html";
import { IActivity } from "@/lib/types";
import { Fragment } from "react";

type Props = Pick<IActivity, "isUpcoming" | "newsFieldGroup" | "content">;

export default function ActivityContentAbout({
  isUpcoming,
  newsFieldGroup: { date, time, venue, venueNotes, schedule, scheduleNotes },
  content,
}: Props) {
  return (
    <article className="container h1-gap">
      <h2>About this event</h2>
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
          <h5>Date</h5>
          <p>{date}</p>
        </div>
        <div>
          <h5>Time</h5>
          <p>{time}</p>
        </div>
        <div>
          <h5>Venue</h5>
          <p>{venue}</p>
        </div>
        {venueNotes && (
          <div className="note">
            <SafeHTML htmlContent={venueNotes} />
          </div>
        )}
        {schedule && (
          <Fragment>
            <h5>Schedule</h5>
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
