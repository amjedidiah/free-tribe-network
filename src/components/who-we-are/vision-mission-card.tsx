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
        <Image alt="history" src={icon} height="24" width="24" />
      </div>
      <h4 className="text-2xl lg:text-3xl font-semibold">{title}</h4>
      <p className="text-description">{content}</p>
    </div>
  );
}
