"use client";

import React from "react";
import Image from "next/image";
import { trusteeProps } from "../../../types";

const Trustee = ({ imagePath, title, description, role }: trusteeProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center h-[72rem]">
      <div className="">
        <div className="lg:h-80 lg:w-80 bg-pink-500">
          <Image alt="trustee" src="/chairman.png" height="300" width="300" />
        </div>
      </div>
      <div className="lg:h-100 lg:w-140 flex flex-col justify-between bg-[#62013B] p-12 text-white w-full h-3/5">
        <div>
          <h6>Dr Adebayo, Ayodeji Mattew</h6>
          <p>Chairman, BOT</p>
        </div>
        <p className="h-4/5 sm:h-3/5">
          A public health physician, a seasoned researcher, and a senior
          lecturer in the Department of Community Medicine, University of
          Ibadan, Nigeria. He has published over 85 academic papers, and
          presented at several international and national conferences. He is a
          recipient of several grants, and was Principal Investigator for a
          World Bank funded project, targeting couples in Ibadan,
        </p>
      </div>
    </div>
  );
};

export default Trustee;
