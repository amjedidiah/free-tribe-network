import {defineRouting} from 'next-intl/routing';
import { Locale } from '@/lib/types';
import pathnames from '@/lib/routes.json';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [Locale.en, Locale.fr, Locale.nl],
 
  // Used when no locale matches
  defaultLocale: Locale.en,

  pathnames
});