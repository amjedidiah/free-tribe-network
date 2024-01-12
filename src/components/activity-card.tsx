import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/lib/data";

type ActivityCardProps = {
  event: (typeof activities)[number];
};

export default function ActivityCard({ event }: ActivityCardProps) {
  return (
    <div className="flex gap-4 lg:gap-7 items-center">
      <div className="rounded-[0.5rem] overflow-hidden w-[187px] min-h-full relative">
        <Image
          fill
          src={event.image}
          alt={event.title}
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between h-full">
        <p className="text-sm py-2 text-[rgba(140,140,140,0.80)]">
          {event.details}
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg lg:text-2xl font-semibold">{event.title}</h2>
          <p className="text-md lg:text-xl text-description">
            {event.description}
          </p>
          <Badge
            variant="outline"
            className="rounded-2xl flex items-center py-[2px] px-2 w-fit text-primary-700 uppercase"
          >
            {event.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
