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
    <div className="flex gap-4 items-center">
      <div className="rounded-[0.5rem] overflow-hidden w-[187px] max-h-[206px] h-full relative">
        <Image
          fill
          sizes="100%"
          src={event.image}
          alt={event.title}
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-3 justify-between h-full">
        <p className="text-xs py-1 text-[rgba(140,140,140,0.80)]">
          {event.details}
        </p>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold align-self-start ">
            {event.title}
          </h2>
          <p className="text-description">{event.description}</p>
        </div>
        <Link
          href="/news-events/initiatives/[initiative]"
          as={`/news-events?initiative=${event.initiative}`}
          scroll={false}
        >
          <Badge
            variant="outline"
            className="text-xs rounded-2xl flex items-center py-[2px] px-2 w-fit text-primary-700 uppercase"
          >
            {formattedInitiative}
          </Badge>
        </Link>
      </div>
    </div>
  );
}
