"use client";

import React from "react";
import Image from "next/image";
import { feedbackProps } from "../../../types";

const Feedback = ({ imagePath, title, description, role }: feedbackProps) => {
  return (
    <section className="flex flex-col justify-center items-center lg:px-24 lg:py-20 sm:p-12">
      <div className="flex flex-col justify-around items-center lg:w-144 h-[36rem] sm:h-80">
        <p className="text-center lg:h-32 px-8 py-4">{description}</p>
        <div>
          <Image alt="Avatar" src={imagePath} height="50" width="50" />
        </div>
        <p>{title}</p>
        <p>{role}</p>
        <Image alt="star" src="/star.svg" height="10" width="10" />
      </div>
    </section>
  );
};

export default Feedback;
