import { IActivity } from "@/lib/types";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function useInitiativeData(initInitiativeData?: IActivity[]) {
  const searchParams = useSearchParams();
  const urlInitiative = searchParams.get("initiative");
  const allSearchParams = Array.from(searchParams.entries());
  const t = useTranslations("Our initiative.initiatives");

  const shouldShowRefreshButton = useMemo(
    () => allSearchParams.length !== 1,
    [allSearchParams.length]
  );

  const displayedData = useMemo(() => {
    if (!urlInitiative) return initInitiativeData;

    return initInitiativeData?.filter((activity) =>
      activity.categories.some(
        (item) => t(`${item.slug}.id` as any) === urlInitiative
      )
    );
  }, [initInitiativeData, t, urlInitiative]);

  return { displayedData, shouldShowRefreshButton };
}
