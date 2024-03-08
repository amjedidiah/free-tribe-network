import ActivityContentTop from "@/components/activity/activity-content-top";
import ActivityContentAbout from "@/components/activity/activity-content-about";

type Props = {
  isUpcoming: boolean;
};

export default function ActivityContent({ isUpcoming }: Props) {
  return (
    <section className="pt-10 flex flex-col gap-20">
      <ActivityContentTop isUpcoming={isUpcoming} />
      <ActivityContentAbout isUpcoming={isUpcoming} />
    </section>
  );
}
