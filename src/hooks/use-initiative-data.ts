import { IActivity } from "@/lib/types";
import { getPurifiedSlug } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function useInitiativeData(initInitiativeData?: IActivity[]) {
  const searchParams = useSearchParams();
  const urlInitiative = searchParams.get("initiative");
  const allSearchParams = Array.from(searchParams.entries());
  const t = useTranslations("Our initiative.initiatives");
  const locale = useLocale();

  const shouldShowRefreshButton = useMemo(
    () => allSearchParams.length !== 1,
    [allSearchParams.length]
  );

  const displayedData = useMemo(() => {
    if (!urlInitiative) return initInitiativeData;

    return initInitiativeData?.filter((activity) =>
      activity.categories
        .filter((item) => item.parent?.node.slug.includes("initiatives"))
        .some(
          (item) =>
            t(`${getPurifiedSlug(item.slug, locale)}.id` as any) ===
            urlInitiative
        )
    );
  }, [initInitiativeData, locale, t, urlInitiative]);

  return { displayedData, shouldShowRefreshButton };
}
