"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollToSection, {
  UseScrollToSectionProps,
} from "@/hooks/use-scroll-to-section";
import { activityTabsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

type Props = UseScrollToSectionProps & {
  isPrimary?: boolean;
};

export default function ActivityTabs({ isPrimary = false, ...rest }: Props) {
  const { handleSectionChange, activeSection } = useScrollToSection(rest);
  const t = useTranslations("News.tabs");
  const getTranslatedTrigger = useCallback(
    (trigger: string) =>
      t(`${trigger}` as any)
        .replaceAll(" ", "-")
        .toLowerCase(),
    [t]
  );

  return (
    <Tabs
      value={activeSection}
      onValueChange={handleSectionChange}
      className="grid grid-cols-1 gap-4 lg:gap-14"
    >
      <TabsList
        className={cn(
          "py-2 px-[0.625rem] rounded-full flex flex-wrap gap-[0.625rem] place-self-center",
          {
            "bg-primary-50": isPrimary,
            "bg-secondary-50": !isPrimary,
          }
        )}
      >
        {activityTabsData.map(({ trigger }) => {
          const translatedTrigger = getTranslatedTrigger(trigger);

          return (
            <TabsTrigger
              className="py-2 px-10 lg:py-4 lg:px-20 font-semibold capitalize"
              key={translatedTrigger}
              value={translatedTrigger}
            >
              {t(`${trigger}` as any)}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {activeSection && (
        <div id={activeSection}>
          {activityTabsData
            .filter(
              (item) => getTranslatedTrigger(item.trigger) === activeSection
            )
            .map(({ trigger, Component }) => (
              <Component
                key={trigger}
                translatedTrigger={getTranslatedTrigger(trigger)}
                trigger={trigger}
              />
            ))}
        </div>
      )}
    </Tabs>
  );
}
