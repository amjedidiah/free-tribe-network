"use client";

import { hasCookie, setCookie } from "cookies-next";
import { useCallback, useEffect, useState } from "react";
import ShouldRender from "@/components/shared/should-render";

const CONSENT_COOKIE_NAME = "Xf7oUpXcZ4GVjGirBmNs";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true);

  const acceptCookies = useCallback(() => {
    setCookie(CONSENT_COOKIE_NAME, true);
    setShowConsent(false);
  }, []);

  useEffect(() => {
    setShowConsent(!hasCookie(CONSENT_COOKIE_NAME));
  }, []);

  return (
    <ShouldRender condition={showConsent}>
      <div className="fixed inset-0 bg-primary-500 bg-opacity-50 z-50">
        <div className="fixed bottom-0 left-0 right-0 py-8 bg-primary-500 text-whitesmoke">
          <div className="container flex max-lg:flex-col lg:items-center justify-between gap-5 lg:gap-20">
            <span>
              This website uses cookies to improve user experience. By using our
              website, you consent to all the Terms of Usage in accordance with
              our{" "}
              <a
                href="https://freetribenetwork.com/wp-content/uploads/2024/06/PRIVACY-POLICY.pdf"
                className="inline-flex items-center text-white underline"
              >
                <span className="font-semibold">Privacy Policy</span>
              </a>
            </span>
            <button
              className="bg-white text-primary-500 py-[0.625rem] px-[1.125rem] rounded-[0.5rem] shadow-md"
              onClick={acceptCookies}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </ShouldRender>
  );
}
