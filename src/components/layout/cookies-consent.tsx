"use client";

import ShouldRender from "@/components/shared/should-render";
import { useCookiesConsentContext } from "@/context/cookies-consent-context";
import { useTranslations } from "next-intl";

export default function CookiesConsent() {
  const t = useTranslations("Layout.Cookies Consent");
  const { shouldShowConsent, acceptAllCookies, acceptEssentialCookies } =
    useCookiesConsentContext();

  return (
    <ShouldRender condition={shouldShowConsent}>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="fixed bottom-0 left-0 right-0 py-8 bg-primary-500 text-whitesmoke">
          <div className="container flex max-lg:flex-col lg:items-center justify-between gap-5 lg:gap-20">
            <span>
              {t.rich("info", {
                a: (chunks) => (
                  <a
                    href="https://freetribenetwork.com/content/wp-content/uploads/2024/06/PRIVACY-POLICY.pdf"
                    className="inline-flex items-center text-white underline font-semibold"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </span>
            <div className="flex flex-wrap gap-4 min-w-fit">
              <button
                className="bg-primary-500 text-white border-2 border-white py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
                onClick={acceptEssentialCookies}
              >
                {t("essential")}
              </button>
              <button
                className="bg-white text-primary-500 py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
                onClick={acceptAllCookies}
              >
                {t("all")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ShouldRender>
  );
}
