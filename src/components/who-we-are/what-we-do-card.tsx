import React from "react";
import Image from "next/image";

type WhatWeDoCardProps = {
  title: string;
  icon: string;
  className: string;
};

export default function WhatWeDoCard({
  title,
  icon,
  className,
}: WhatWeDoCardProps) {
  return (
    <div
      className={`${className} rounded p-4 flex flex-col gap-2 items-center justify-center`}
    >
      <div className="w-20 h-20 relative rounded-full overflow-hidden">
        <Image alt={title} src={icon} sizes="100%" fill />
      </div>
      <h4 className="font-semibold max-w-64 text-center">{title}</h4>
    </div>
  );
}
