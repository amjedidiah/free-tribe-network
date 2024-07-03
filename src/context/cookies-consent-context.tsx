"use client";
import useCookiesConsent from "@/hooks/use-cookies-consent";
import { CookiesConsentContextType } from "@/lib/types";
import { PropsWithChildren, createContext, useContext } from "react";

const CookiesConsentContext = createContext<CookiesConsentContextType>({
  shouldShowConsent: false,
  shouldShowSearch: false,

  acceptAllCookies: () => {},
  acceptEssentialCookies: () => {},
});

export function CookiesConsentProvider({ children }: PropsWithChildren) {
  const value = useCookiesConsent();

  return (
    <CookiesConsentContext.Provider value={value}>
      {children}
    </CookiesConsentContext.Provider>
  );
}

export function useCookiesConsentContext() {
  const contextValue = useContext(CookiesConsentContext);

  return contextValue;
}

export default CookiesConsentContext;
