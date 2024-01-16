import React from "react";
import Image from "next/image";
import { CardProps, ButtonProps } from "../../../types";
import { Button } from "..";

const Card = ({
  title,
  supportText,
  description,
  showDescription = true,
  buttonColor,
  className,
}: CardProps) => {
  return (
    <div
      className={`border bg-white rounded p-4 h-96 flex flex-col justify-between snap-center ${className}`}
    >
      <Image
        alt="bulletin"
        src="/images/bulletin.png"
        width="400"
        height="400"
      />
      <i>{supportText}</i>
      <h2 className="text-xl font-bold">{title}</h2>
      {showDescription && <p>{description}</p>}
      <Button title="Download now" className={buttonColor} />
    </div>
  );
};

export default Card;
