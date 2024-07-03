import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales, pathnames } from "@/lib/i18n.config";
import { NextRequest } from "next/server";
import { CONSENT_COOKIE_NAME } from "./lib/constants";

export default async function middleware(request: NextRequest) {
  let cookieConsent = request.cookies.get(CONSENT_COOKIE_NAME);
  const localeDetection = !!cookieConsent?.value;

  const handleI18nRouting = createMiddleware({
    defaultLocale,
    locales,
    localeDetection,
    pathnames,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
