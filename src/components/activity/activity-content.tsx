import ActivityContentAbout from "@/components/activity/activity-content-about";
import ActivityContentTop from "@/components/activity/activity-content-top";
import { IActivity } from "@/lib/types";

export default function ActivityContent({ activity }: { activity: IActivity }) {
  return (
    <section className="pt-10 flex flex-col gap-20">
      <ActivityContentTop {...activity} />
      <ActivityContentAbout {...activity} />
    </section>
  );
}
