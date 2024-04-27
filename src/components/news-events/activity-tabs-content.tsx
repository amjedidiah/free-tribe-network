"use client";
import { TabsContent } from "@/components/ui/tabs";
import { formatLinkLabel } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ActivityTabsContentProps = PropsWithChildren & {
  trigger: string;
};

export default function ActivityTabsContent({ children, trigger }: ActivityTabsContentProps) {
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
      {children}
    </TabsContent>
  );
}
