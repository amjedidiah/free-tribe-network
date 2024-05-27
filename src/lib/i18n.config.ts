import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Locale, LocaleCountry } from "@/lib/types";

export const localeLabels = {
  [LocaleCountry.GB]: Locale.en,
  [LocaleCountry.FR]: Locale.fr,
};

export const locales = Object.values(localeLabels);
export const defaultLocale = Locale.en;


export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: locales,
});
