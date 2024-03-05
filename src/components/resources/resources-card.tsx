import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SafeHTML from "@/components/shared/safe-html";

export type Resource = {
  title: string;
  uploadDate: string;
  src: string;
  link: string;
  description?: string | TrustedHTML;
};

type ResourcesCardProps = Resource & {
  className?: string;
};

export default function ResourcesCard({
  title,
  uploadDate,
  description,
  link,
  src = "/images/bulletin.png",
  className,
}: ResourcesCardProps) {
  return (
    <div
      className={cn(
        "p-2 pb-4 flex flex-col gap-6 bg-white rounded-[8px] max-w-md",
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
              style={{ objectFit: "cover" }}
              className="rounded-[4px]"
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <span className="text-[rgba(140,140,140,0.8)] text-sm uppercase">
              {uploadDate}
            </span>
            <h5 className="text-black font-semibold capitalize">{title}</h5>
          </div>

          <div className=" text-description ">
            {description && <SafeHTML htmlContent={description} />}
          </div>
        </div>
      </div>
      <a
        href={link}
        className="text-white text-center py-2 rounded download"
        target="_blank"
      >
        Download Now
      </a>
    </div>
  );
}
