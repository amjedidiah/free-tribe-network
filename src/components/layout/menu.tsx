"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuProps = (typeof routes)[number];

export default function Menu({ label, links, href }: MenuProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu className="block max-lg:[&_*]:animate-none max-lg:[&>div]:static max-lg:[&_*]:justify-start max-lg:[&>div]:block max-lg:[&_div.absolute_*]:p-0 max-lg:[&_div.absolute_*]:border-none max-lg:[&_div.absolute_*]:shadow-none max-lg:[&_div.absolute_ul_li_*]:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("m-0 px-0 py-1 h-fit", {
              "text-primary-500 font-bold": isActive,
            })}
          >
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-5 space-y-2">
              {links?.map((i, index) => (
                <li
                  key={index}
                  className="text-secondary hover:bg-gray-100 rounded-md"
                >
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center gap-4 w-full p-3"
                    )}
                    asChild
                    active={isActive}
                  >
                    <Link href={`${href}?section=${i.href}`}>
                      <Image
                        src={i.icon}
                        alt={i.label}
                        width={24}
                        height={24}
                      />
                      <span className="flex-1">{i.label}</span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
