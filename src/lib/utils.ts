import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { initiativeData } from "@/lib/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLinkLabel = (href: string | null) =>
  !href ? "" : href.replace(/-/g, " ");

export const fetchInitiativeData = async (name: string) =>
  Promise.resolve(initiativeData[name as keyof typeof initiativeData]);

