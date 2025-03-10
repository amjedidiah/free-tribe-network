import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { CONSENT_COOKIE_NAME } from "./lib/constants";
import {routing} from './i18n/routing';

export default async function middleware(request: NextRequest) {
  let cookieConsent = request.cookies.get(CONSENT_COOKIE_NAME);
  const localeDetection = !!cookieConsent?.value;

  const handleI18nRouting = createMiddleware({
    ...routing,
    localeDetection,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|nl|en)/:path*']
};
