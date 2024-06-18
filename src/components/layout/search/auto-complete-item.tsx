import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import { LucideIcon, ZoomIn } from "lucide-react";
import Link from "next/link";

export function AutocompleteItem({
  children,
  icon: Icon = ZoomIn,
  actions,
  href,
  className,
}: PropsWithChildren<
  ComponentProps<"a"> & {
    icon?: LucideIcon;
    actions?: JSX.Element;
  }
>) {
  return (
    <Link
      href={(href || "#") as any}
      className={cn(
        "flex items-stretch justify-between hover:bg-gray-100 aria-selected:bg-gray-100 transition-colors",
        className
      )}
    >
      <div className="flex items-center">
        <div className="text-gray-400 py-3 lg:py-2.5 pl-5 lg:pl-3 pr-3 lg:pr-2 flex items-center justify-center">
          <Icon className="w-5 h-5 stroke-2" />
        </div>
        <span className="capitalize">{children}</span>
      </div>
      <div className="flex mr-1.5">{actions}</div>
    </Link>
  );
}
