import React from "react";
import Image from "next/image";

interface projectProps {
  title?: string;
  content?: string;
  className: string;
}

const Project = ({ title, content, className }: projectProps) => {
  return (
    <div className={`relative w-96 ${className}`}>
      <div>
        <Image
          src="/images/taffiya-bg.png"
          alt="taffiya-background"
          height="500"
          width="500"
          className="h-[30rem] w-96"
        />
      </div>
      <div className="absolute left-20 top-20">
        <Image
          src="/images/taffiya.png"
          alt="taffiya"
          height="400"
          width="400"
          className=" w-52 h-72"
        />
        <div className="top-[19.5rem] left-[7.5rem] text-center text-white">
          <p>{title}</p>
          <h5>Taffiya</h5>
        </div>
      </div>
    </div>
  );
};

export default Project;
