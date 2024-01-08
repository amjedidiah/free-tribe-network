import ActivityCard from "@/components/activity-card";
import ActivityPagination from "@/components/activity-pagination";
import { activities } from "@/lib/data";

export default function Recent() {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {activities.map((event) => (
          <ActivityCard key={event.title} event={event} />
        ))}
      </div>
      <hr />
      <ActivityPagination/>
    </div>
  );
}
