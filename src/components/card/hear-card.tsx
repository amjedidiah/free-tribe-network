import React from "react";
import Image from "next/image";
import { HearData } from "./constant";
import { HearDataProps } from "../../../types";

const HearCard = ({ title, detail, icon, contact }: HearDataProps) => {
  return (
    <div className="h-72 w-96 bg-slate-50 flex flex-col justify-between p-6">
      <div className="bg-slate-500 h-8 w-8 rounded p-1">
        <Image alt="title" src={icon} height="30" width="30" />
      </div>
      <h6>{title}</h6>
      <p>{detail}</p>
      <p className="text-pink-500">{contact}</p>
    </div>
  );
};

export default HearCard;
