import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SafeHTML from "@/components/shared/safe-html";
import { Resource } from "@/lib/types";

type ResourcesCardProps = Resource & {
  className?: string;
};

export default function ResourcesCard({
  title,
  modifiedDate,
  description,
  url,
  src = "/images/bulletin.webp",
  className,
}: ResourcesCardProps) {
  return (
    <div
      className={cn(
        "p-2 pb-4 flex flex-col gap-4 bg-white rounded-[8px]",
        className
      )}
    >
      <div className="grid gap-4 rounded-[4px]">
        <div className="h-52 relative shadow rounded-[4px]">
          {src && (
            <Image
              alt={title}
              src={src}
              fill
              sizes="100%"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-[4px]"
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <span className="text-[rgba(140,140,140,0.8)] text-sm uppercase">
              {modifiedDate}
            </span>
            <h5 className="text-black font-semibold capitalize">{title}</h5>
          </div>

          {description && (
            <div className="text-description">
              <SafeHTML htmlContent={description} />
            </div>
          )}
        </div>
      </div>
      {url && (
        <a
          href={url}
          className="text-white text-center py-2 rounded download"
          target="_blank"
        >
          Download Now
        </a>
      )}
    </div>
  );
}
