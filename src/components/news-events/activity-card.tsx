import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { activitiesData } from "@/lib/data";
import { useMemo } from "react";
import { formatLinkLabel } from "@/lib/utils";
import Link from "next/link";

type ActivityCardProps = {
  event: (typeof activitiesData)[number];
};

export default function ActivityCard({ event }: ActivityCardProps) {
  const formattedInitiative = useMemo(
    () => formatLinkLabel(event.initiative),
    [event.initiative]
  );
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="rounded-[0.5rem] overflow-hidden w-full sm:w-72 max-sm:h-52 sm:h-full relative">
        <Image
          fill
          sizes="100%"
          src={event.image || "/images/activity.png"}
          alt={event.title}
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between max-sm:w-full">
        <p className="text-xs py-1 text-[rgba(140,140,140,0.80)]">
          {event.details}
        </p>
        <div className="h5-gap">
          <h5 className="align-self-start font-semibold">{event.title}</h5>
          <p className="text-description">{event.description}</p>
        </div>
        <Link
          href="/news-events/initiatives/[initiative]"
          as={`/news-events?initiative=${event.initiative}`}
          scroll={false}
          className="bg-primary-50 w-fit p-1 rounded-2xl"
        >
          <Badge
            variant="outline"
            className="text-xs border-none rounded-2xl flex items-center py-[2px] px-2 w-fit text-primary-700 uppercase bg-white"
          >
            {formattedInitiative}
          </Badge>
        </Link>
      </div>
    </div>
  );
}
