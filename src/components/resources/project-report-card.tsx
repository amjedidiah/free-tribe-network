import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  minsRead: number;
  src: string;
}

const ProjectReportCard = ({ title, minsRead, src }: Props) => {
  return (
    <div className="h-[425px] p-8 xl:px-12 w-full max-w-[350px]">
      <div className="relative h-full">
        <div className="bg-primary-50 w-full h-full rotate-12 absolute" />
        <div className="relative h-full">
          <div className="bg-primary-500 px-10 pt-5 pb-3 flex flex-col justify-between gap-4 absolute w-full h-full">
            <div className="bg-primary-50 flex-1">
              <div className="relative -left-5 top-3 h-full">
                <Image
                  src={src}
                  alt={title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
            <div className="h5-gap text-center">
              <p className="text-primary-100 text-sm">{minsRead} mins read</p>
              <h5 className="text-primary-50 capitalize">{title}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReportCard;
