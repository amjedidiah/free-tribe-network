import { useRouter } from "@/lib/i18n.config";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { scroller } from "react-scroll";

export type UseScrollToSectionProps = {
  initUrlSection?: string;
  shouldScroll?: boolean;
};

export default function useScrollToSection(props?: UseScrollToSectionProps) {
  const { initUrlSection, shouldScroll = true } = props || {};
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeSection = searchParams.get("section")?.toLowerCase();

  const handleSectionChange = useCallback(
    (id: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.set("section", id.toLowerCase().replaceAll(" ", "-"));

      const href = `?${updatedSearchParams.toString()}`;
      router.push(href as any, {
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
            offset: -200,

            isDynamic: true,
          }),
        200
      );
  }, [activeSection]);

  useEffect(() => {
    if (shouldScroll) handleScroll();
  }, [handleScroll, shouldScroll]);

  useEffect(() => {
    if (initUrlSection && !activeSection) handleSectionChange(initUrlSection);
  }, [handleSectionChange, initUrlSection, activeSection]);

  return { handleSectionChange, activeSection, handleScroll };
}
