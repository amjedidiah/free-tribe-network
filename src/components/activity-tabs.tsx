"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollTab from "@/hooks/use-scroll-tab";
import { activityTabsData } from "@/lib/data";
import { formatLinkLabel } from "@/lib/utils";

type ActivityTabsProps = {
  data: typeof activityTabsData;
};

export default function ActivityTabs({ data }: ActivityTabsProps) {
  const { handleTabChange, activeTab } = useScrollTab();

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="grid grid-cols-1 gap-4 lg:gap-14"
    >
      <TabsList className="py-2 px-[0.625rem] bg-gray-200 rounded-full flex flex-wrap gap-[0.625rem] place-self-center">
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
      {activeTab && (
        <div id={activeTab}>
          {data.map(({ trigger, Component }) => (
            <Component key={trigger} trigger={trigger} />
          ))}
        </div>
      )}
    </Tabs>
  );
}
