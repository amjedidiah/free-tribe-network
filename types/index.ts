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

// type settings for Posts
export interface Node {
  title: string;
  id: string;
  slug: string;
  excerpt: string;
}

export interface Post {
  node: Node;
}

export interface ClassName {
  [key: number]: string;
}

export interface GeneralSettings {
  title: string;
  description: string;
}

export interface Props {
  page: GeneralSettings;
  posts: Node[];
}
