import React from "react";
import Image from "next/image";

type VisionMissionCardProps = {
  title: string;
  content: string;
  icon: string;
  className: string;
};

export default function VisionMissionCard({
  title,
  content,
  icon,
  className,
}: VisionMissionCardProps) {
  return (
    <div className={`${className} flex flex-col gap-4 p-4 rounded`}>
      <div className="bg-white h-14 w-14 p-4 rounded-full">
        <div className="relative h-6 w-6">
          <Image
            alt="history"
            src={icon}
            fill
            sizes="100%"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
      <div className="h5-gap">
        <h5>{title}</h5>
        <p className="text-description">{content}</p>
      </div>
    </div>
  );
}
