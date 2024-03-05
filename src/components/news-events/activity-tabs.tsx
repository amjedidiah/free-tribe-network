"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import { activityTabsData, defaultNewsEventSection } from "@/lib/data";
import { formatLinkLabel } from "@/lib/utils";

type ActivityTabsProps = {
  data: typeof activityTabsData;
};

export default function ActivityTabs({ data }: ActivityTabsProps) {
  const { handleSectionChange, activeSection } = useScrollToSection({
    initUrlSection: defaultNewsEventSection,
  });

  return (
    <Tabs
      value={activeSection}
      onValueChange={handleSectionChange}
      className="grid grid-cols-1 gap-4 lg:gap-14"
    >
      <TabsList className="py-2 px-[0.625rem] bg-secondary-50 rounded-full flex flex-wrap gap-[0.625rem] place-self-center">
        {data.map(({ trigger }) => (
          <TabsTrigger
            className="py-2 px-10 lg:py-4 lg:px-20 font-semibold capitalize"
            key={trigger}
            value={trigger}
          >
            {formatLinkLabel(trigger)}
          </TabsTrigger>
        ))}
      </TabsList>
      {activeSection && (
        <div id={activeSection}>
          {data.map(({ trigger, Component }) => (
            <Component key={trigger} trigger={trigger} />
          ))}
        </div>
      )}
    </Tabs>
  );
}
