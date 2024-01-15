import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function useScrollToSection(initUrlSection?: string) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSection = searchParams.get("section");
  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = useCallback(
    (id: string) =>
      router.push(`?section=${id}`, {
        scroll: false,
      }),
    [router]
  );

  useEffect(() => {
    if (urlSection) setActiveSection(urlSection);
  }, [urlSection]);

  useEffect(() => {
    if (activeSection)
      scroller.scrollTo(activeSection, {
        smooth: true,
        offset: -220,

        isDynamic: true,
      });
  }, [activeSection]);

  useEffect(() => {
    if (initUrlSection && !urlSection) handleSectionChange(initUrlSection);
  }, [handleSectionChange, initUrlSection, urlSection]);

  return { handleSectionChange, activeSection };
}
