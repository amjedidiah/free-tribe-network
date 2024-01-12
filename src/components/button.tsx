"use client";
import React from "react";
import { ButtonProps } from "../../types";

const Button = ({ title, className, handleClick }: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
