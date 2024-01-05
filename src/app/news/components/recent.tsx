import ActivityCard from "@/components/activity-card";

const data = [
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
  {
    title: "Design Handoff and Developer Handover",
    description: "Design Handoff and Developer Handover",
    image: "/images/Frame 17.jpg",
    details: "NOV 24, 2023 - IN-PERSON EVENT - LAHORE, PK",
  },
];

export default function Recent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      {data.map((event) => (
        <ActivityCard key={event.title} event={event} />
      ))}
    </div>
  );
}
