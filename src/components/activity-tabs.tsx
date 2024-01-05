import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ActivityTabsProps = {
  data: {
    trigger: string;
    component: React.ReactNode;
  }[];
};

export default function ActivityTabs({ data }: ActivityTabsProps) {
  return (
    <Tabs defaultValue={data[0].trigger} className="grid grid-cols-1 gap-4 lg:gap-14">
      <TabsList className="p-1 bg-gray-200 rounded-full grid grid-cols-3 gap-1 lg:gap-2 lg:place-self-center lg:w-[44rem]">
        {data.map(({ trigger }) => (
          <TabsTrigger className="py-2 lg:py-4 text-xs lg:text-sm" key={trigger} value={trigger}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      <div>
        {data.map(({ trigger, component }) => (
          <TabsContent key={trigger} value={trigger}>
            {component}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
