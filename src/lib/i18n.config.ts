import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";
import { Locale, LocaleCountry } from "@/lib/types";
import routes from "@/lib/routes.json";

export const localeLabels = {
  [LocaleCountry.GB]: Locale.en,
  [LocaleCountry.FR]: Locale.fr,
  [LocaleCountry.NL]: Locale.nl,
};

export const locales = Object.values(localeLabels);
export const defaultLocale = Locale.en;

export const pathnames = routes satisfies Pathnames<typeof locales>;

export const { Link, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
