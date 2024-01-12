import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  className?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface CardProps {
  title: string;
  content: string;
  icon: string;
  clas: string;
}

export interface profileDataProps {
  title: string;
  dp: string;
  role: string;
}

export interface HearDataProps {
  title: string;
  detail: string;
  icon: string;
  contact: string;
}

export interface ActivitiesProps {
  title: string;
  icon: string;
  clas: string;
}

export interface feedbackProps {
  imagePath: string;
  title: string;
  description: string;
  role: string;
}

export interface trusteeProps {
  imagePath: string;
  title: string;
  description: string;
  role: string;
}
