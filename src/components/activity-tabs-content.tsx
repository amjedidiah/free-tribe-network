import { TabsContent } from "@/components/ui/tabs";
import ActivityPagination from "@/components/activity-pagination";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ActivityTabsContentProps = PropsWithChildren & {
  trigger: string;
  isBlog?: boolean;
};

export default function ActivityTabsContent({
  children,
  trigger,
  isBlog = false,
  ...rest
}: ActivityTabsContentProps) {
  return (
    <TabsContent key={trigger} value={trigger}>
      <div className="flex flex-col gap-4 lg:gap-8">
        <div
          className={cn("grid ", {
            "lg:grid-cols-3 gap-8 sm:grid-cols-2": isBlog,
            "gap-7 md:grid-cols-2": !isBlog,
          })}
        >
          {children}
        </div>
        <ActivityPagination {...rest} />
      </div>
    </TabsContent>
  );
}
