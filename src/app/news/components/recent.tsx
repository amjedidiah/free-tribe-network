import ActivityCard from "@/components/activity-card";
import { activities } from "@/lib/data";


export default function Recent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      {activities.map((event) => (
        <ActivityCard key={event.title} event={event} />
      ))}
    </div>
  );
}
