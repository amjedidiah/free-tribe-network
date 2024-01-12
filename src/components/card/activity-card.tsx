import React from "react";
import Image from "next/image";
import { ActivitiesProps } from "../../../types";

const ActivitiesCard = ({ title, icon, clas }: ActivitiesProps) => {
  return (
    <div
      className={`${clas} p-4 h-52 flex flex-col justify-around items-center`}
    >
      <Image
        alt="activities"
        src={icon}
        width="50"
        height="50"
        className="rounded-full"
      />
      <h4 className="w-132 font-bold">{title}</h4>
    </div>
  );
};

export default ActivitiesCard;
