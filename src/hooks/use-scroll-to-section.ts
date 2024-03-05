import { defaultNewsEventSection } from "@/lib/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { scroller } from "react-scroll";

export type UseScrollToSectionProps = {
  initUrlSection?: string;
  shouldScroll?: boolean;
};

export default function useScrollToSection({
  initUrlSection = defaultNewsEventSection,
  shouldScroll = false,
}: UseScrollToSectionProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSection = searchParams.get("section");
  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = useCallback(
    (id: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set("section", id);
      const href = `?${updatedSearchParams.toString()}`;

      router.push(href, {
        scroll: false,
      });
    },
    [router, searchParams]
  );

  const handleScroll = useCallback(() => {
    if (activeSection)
      setTimeout(
        () =>
          scroller.scrollTo(activeSection, {
            smooth: true,
            offset: -220,

            isDynamic: true,
          }),
        0
      );
  }, [activeSection]);

  useEffect(() => {
    if (urlSection) setActiveSection(urlSection);
  }, [urlSection]);

  useEffect(() => {
    if (shouldScroll) handleScroll();
  }, [activeSection, handleScroll, shouldScroll]);

  useEffect(() => {
    if (initUrlSection && !urlSection) handleSectionChange(initUrlSection);
  }, [handleSectionChange, initUrlSection, urlSection]);

  return { handleSectionChange, activeSection, handleScroll };
}
