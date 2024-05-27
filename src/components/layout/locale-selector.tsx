"use client";

import { useCallback, useMemo } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useSearchParams } from "next/navigation";
import { LocaleCountry } from "@/lib/types";
import { localeLabels, usePathname, useRouter } from "@/lib/i18n.config";
import { useLocale } from "next-intl";

export default function LocaleSelector() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = useCallback(
    (code: string) => {
      const newLocale = localeLabels[code as LocaleCountry];
      const newUrl = `${pathname}?${searchParams.toString()}`;

      router.replace(newUrl, { locale: newLocale });
    },
    [pathname, router, searchParams]
  );

  const selected = useMemo(
    () =>
      Object.entries(localeLabels).find((label) => label[1] === locale)?.[0],
    [locale]
  );

  if (!selected) return null;

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={changeLocale}
      placeholder="Select a language"
      countries={Object.values(LocaleCountry)}
      customLabels={localeLabels}
      className="[&_*]:text-secondary-500 [&_*]:font-semibold [&_*]:uppercase [&_button]:border-0"
    />
  );
}
