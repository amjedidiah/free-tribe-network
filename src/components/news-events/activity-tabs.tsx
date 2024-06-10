"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollToSection, {
  UseScrollToSectionProps,
} from "@/hooks/use-scroll-to-section";
import { activityTabsData } from "@/lib/data";
import { cn, formatLinkLabel } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = UseScrollToSectionProps & {
  isPrimary?: boolean;
};

export default function ActivityTabs({ isPrimary = false, ...rest }: Props) {
  const { handleSectionChange, activeSection } = useScrollToSection(rest);
  const t = useTranslations("News.tabs")

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
        {activityTabsData.map(({ trigger }) => (
          <TabsTrigger
            className="py-2 px-10 lg:py-4 lg:px-20 font-semibold capitalize"
            key={trigger}
            value={trigger}
          >
            {t(`${trigger}` as any)}
          </TabsTrigger>
        ))}
      </TabsList>
      {activeSection && (
        <div id={activeSection}>
          {activityTabsData
            .filter((item) => item.trigger === activeSection)
            .map(({ trigger, Component }) => (
              <Component key={trigger} trigger={trigger} />
            ))}
        </div>
      )}
    </Tabs>
  );
}
