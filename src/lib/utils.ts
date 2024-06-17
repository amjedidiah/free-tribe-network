import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { CurrencyKeys, currencies, initiativeData } from "@/lib/data";
import { ResourcesIdsEN, ResourcesIdsFR, ResourcesIdsNL } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatLinkLabel = (href: string | null) =>
  !href ? "" : href.replace(/-/g, " ");

export const fetchInitiativeData = async (name: string) =>
  Promise.resolve(initiativeData[name as keyof typeof initiativeData]);

export const validateEmailWithRegex = (email: string) =>
  Boolean(
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );

export const amountToCents = (amount: number) => amount * 100;

export const formatAmount = (amount: number) =>
  amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const getDonationCurrency = (currencyLabel: CurrencyKeys) =>
  currencies[currencyLabel];

export const validateDonationAmount = (
  amount: number | string,
  currencyLabel: CurrencyKeys
) => Number(amount) >= (getDonationCurrency(currencyLabel)?.min || 0);

export const getPurifiedSlug = (slug: string, locale: string) =>
  slug.replaceAll(`-${locale}`, "");

export const getKeyResource = (locale: string) =>
  ({ en: ResourcesIdsEN, fr: ResourcesIdsFR, nl: ResourcesIdsNL }[locale] ||
  ResourcesIdsEN);