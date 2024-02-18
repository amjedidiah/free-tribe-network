"use client";
import { TabsContent } from "@/components/ui/tabs";
import ActivityPagination from "@/components/news-events/activity-pagination";
import { cn, formatLinkLabel } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const initiative = searchParams.get("initiative") || "";
  const router = useRouter();
  const pathname = usePathname();

  const handleResetInitiative = () => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.delete("initiative");

    router.push(`${pathname}?${updatedParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <TabsContent key={trigger} value={trigger} className="grid gap-2">
      {initiative && (
        <div className="flex justify-end">
          <Badge className="flex gap-2 items-center text-sm font-bold uppercase opacity-80 hover:bg-primary hover:opacity-100 hover:shadow-md">
            <span>{formatLinkLabel(initiative)}</span>{" "}
            <span
              className="cursor-pointer p-1"
              onClick={handleResetInitiative}
            >
              x
            </span>
          </Badge>
        </div>
      )}
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
