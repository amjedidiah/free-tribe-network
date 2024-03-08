import React from "react";
import Image from "next/image";
import { Resource } from "@/lib/types";

type Props = Pick<Resource, "title" | "minsRead" | "src" | "url">;

const ProjectReportCard = ({ title, minsRead, src, url }: Props) => {
  return (
    <div className="h-[425px] p-8 xl:px-12 w-full max-w-[350px]">
      <div className="relative h-full">
        <div className="bg-primary-50 w-full h-full rotate-12 absolute" />
        <div className="relative h-full">
          <div className="bg-primary-500 px-10 pt-5 pb-3 flex flex-col justify-between gap-4 absolute w-full h-full">
            <div className="bg-primary-50 flex-1">
              <div className="relative -left-5 top-3 h-full">
                <a href={url} target="_blank">
                  <span className="hidden">{title}</span>
                  <Image
                    src={src}
                    alt={title}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </a>
              </div>
            </div>
            <div className="h5-gap text-center">
              <p className="text-primary-100 text-sm">{minsRead} mins read</p>

              <h5 className="text-primary-50 capitalize">
                <a href={url} target="_blank">
                  {title}
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReportCard;
