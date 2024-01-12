import React from "react";
import Image from "next/image";
import { CardProps } from "../../../types";

const Card = ({ title, content, icon, clas }: CardProps) => {
  return (
    <div
      className={`${clas} lg:h-64 lg:w-96 flex flex-col justify-around px-4 rounded md:h-40 h-64`}
    >
      <Image alt="history" src={icon} height="10" width="30" />
      <h4 className="text-3xl bold">{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default Card;
