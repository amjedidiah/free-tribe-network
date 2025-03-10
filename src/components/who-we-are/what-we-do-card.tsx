import React from "react";
import Image from "next/image";

type WhatWeDoCardProps = {
  title: string;
  icon: string;
  className: string;
};

export default function WhatWeDoCard({ title, icon, className }: Readonly<WhatWeDoCardProps>) {
  return (
    <div
      className={`${className} rounded p-4 flex flex-col gap-2 items-center justify-center`}
    >
      <div className="w-20 h-20 relative rounded-full overflow-hidden">
        <Image alt={title} src={icon} fill />
      </div>
      <h5 className="max-w-64 text-center">{title}</h5>
    </div>
  );
}
