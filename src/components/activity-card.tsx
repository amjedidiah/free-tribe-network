import Image from "next/image";

type ActivityCardProps = {
  event: {
    title: string;
    description: string;
    image: string;
    details: string;
  };
};

export default function ActivityCard({ event }: ActivityCardProps) {
  return (
    <div className="flex gap-2 lg:gap-6 items-center">
      <div className="rounded-lg overflow-hidden lg:w-[11.7rem] lg:h-[12.9rem]">
        <Image
          className="rounded-md"
          width={200}
          height={100}
          src={event.image}
          alt={event.title}
        />
      </div>
      <div className="py-2 flex flex-col h-full items-start justify-center gap-1 lg:gap-2">
        <p className="text-xs text-gray-400">{event.details}</p>
        <h2 className="text-base lg:text-2xl font-semibold">{event.title}</h2>
        <p className="text-sm lg:text-base">{event.description}</p>
      </div>
    </div>
  );
}
