"use client";

import { useCallback, useMemo } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useSearchParams, useParams } from "next/navigation";
import { LocaleCountry } from "@/lib/types";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { localeLabels } from "@/lib/constants";

export default function LocaleSelector() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const changeLocale = useCallback(
    (code: string) => {
      const newLocale = localeLabels[code as LocaleCountry];
      const newUrl = `${pathname}?${searchParams.toString()}` as any;

      router.replace(
        {
          pathname: newUrl,
          params: params as any,
        },
        { locale: newLocale, scroll: false }
      );
    },
    [params, pathname, router, searchParams]
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
