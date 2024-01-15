import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatLinkLabel = (href: string | null) =>
  !href ? "" : href.replace(/-/g, " ");
