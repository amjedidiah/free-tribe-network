import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function useScrollTab() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const urlTab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (id: string) => {
    router.push(`?tab=${id}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (!urlTab) return;
    setActiveTab(urlTab);
  }, [urlTab]);

  useEffect(() => {
    if (!activeTab) return;

    scroller.scrollTo(activeTab, {
      smooth: true,
      offset: -250,
    });
    router.replace(pathname);
  }, [activeTab, pathname, router]);

  return { handleTabChange, activeTab };
}
