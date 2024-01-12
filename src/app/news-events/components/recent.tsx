import ActivityCard from "@/components/activity-card";
import ActivityTabsContent from "@/components/activity-tabs-content";
import { activities } from "@/lib/data";

type Props = {
  trigger: string;
};

export default function Recent({ trigger }: Props) {
  return (
    <ActivityTabsContent trigger={trigger}>
      {activities.map((event) => (
        <ActivityCard key={event.title} event={event} />
      ))}
    </ActivityTabsContent>
  );
}
