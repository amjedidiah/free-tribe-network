import { CONSENT_COOKIE_NAME } from "@/lib/constants";
import { CookieType } from "@/lib/types";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const essentialCookies = [CookieType.Consent, CookieType.Translation];
const allCookies = Object.values(CookieType);

export default function useCookiesConsent() {
  const [acceptedCookies, setAcceptedCookies] = useState<CookieType[]>();
  const [shouldShowConsent, setShouldShowConsent] = useState(false);

  const shouldShowSearch = !!acceptedCookies?.includes(CookieType.Search);

  const acceptCookies = (cookies: CookieType[]) => {
    setCookie(CONSENT_COOKIE_NAME, JSON.stringify(cookies));
    setAcceptedCookies(cookies);
  };

  const acceptEssentialCookies = () => acceptCookies(essentialCookies);

  const acceptAllCookies = () => acceptCookies(allCookies);

  useEffect(() => {
    const cookiesString = getCookie(CONSENT_COOKIE_NAME);
    if (cookiesString) setAcceptedCookies(JSON.parse(cookiesString));
  }, [setAcceptedCookies]);

  useEffect(
    () => setShouldShowConsent(!acceptedCookies?.length),
    [acceptedCookies?.length]
  );

  return {
    shouldShowConsent,
    acceptAllCookies,
    acceptEssentialCookies,
    shouldShowSearch,
  };
}
