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

type MenuProps = (typeof routes)[number];

export default function Menu({ label, links, href }: MenuProps) {
  return (
    <NavigationMenu className="block max-lg:[&_*]:animate-none max-lg:[&>div]:static max-lg:[&_*]:justify-start max-lg:[&>div]:block max-lg:[&_div.absolute_*]:p-0 max-lg:[&_div.absolute_*]:border-none max-lg:[&_div.absolute_*]:shadow-none max-lg:[&_div.absolute_ul_li_*]:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m-0 px-0 py-1 h-fit font-normal text-sm md:text-base">
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
                      "flex items-center gap-4 w-full p-3 text-sm md:text-base"
                    )}
                    href={`${href}?tab=${i.href}`}
                  >
                    <Image src={i.icon} alt={i.label} width={24} height={24} />
                    <span className="flex-1">{i.label}</span>
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
