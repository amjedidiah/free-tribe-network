import { MouseEventHandler } from "react";

export interface CardProps {
  supportText?: string;
  title: string;
  description?: string;
  showDescription?: boolean;
  className?: string;
  buttonColor?: string;
}

export interface ButtonProps {
  title: string;
  className?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
