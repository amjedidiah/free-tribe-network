import { defaultNewsEventSection } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type UseInitiativeDataProps<T> = Array<T & { initiative: string }>;

export default function useInitiativeData<K>(
  initInitiativeData: UseInitiativeDataProps<K>
) {
  const searchParams = useSearchParams();
  const urlInitiative = searchParams.get("initiative");
  const urlSection = searchParams.get("section") || defaultNewsEventSection;
  const allSearchParams = Array.from(searchParams.entries());

  const shouldShowRefreshButton = useMemo(() => {
    if (allSearchParams.length === 1 && urlSection === defaultNewsEventSection)
      return false;
    return true;
  }, [allSearchParams.length, urlSection]);

  const displayedData = useMemo(() => {
    if (!urlInitiative) return initInitiativeData;

    return initInitiativeData.filter(
      (activity) => activity.initiative === urlInitiative
    );
  }, [initInitiativeData, urlInitiative]);

  return { displayedData, shouldShowRefreshButton };
}
