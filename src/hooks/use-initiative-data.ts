import { defaultNewsEventSection } from "@/lib/data";
import { IActivity } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function useInitiativeData(
  initInitiativeData?: IActivity[],
  trigger = defaultNewsEventSection
) {
  const searchParams = useSearchParams();
  const urlInitiative = searchParams.get("initiative");
  const urlSection = searchParams.get("section") || trigger;
  const allSearchParams = Array.from(searchParams.entries());

  const shouldShowRefreshButton = useMemo(() => {
    if (allSearchParams.length === 1 && urlSection === trigger) return false;
    return true;
  }, [allSearchParams.length, trigger, urlSection]);

  const displayedData = useMemo(() => {
    if (!urlInitiative) return initInitiativeData;

    return initInitiativeData?.filter((activity) =>
      activity.categories.some((item) => item.slug === urlInitiative)
    );
  }, [initInitiativeData, urlInitiative]);

  return { displayedData, shouldShowRefreshButton };
}
