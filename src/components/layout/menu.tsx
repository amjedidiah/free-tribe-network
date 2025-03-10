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
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { PointerEventHandler, useCallback } from "react";

type MenuProps = (typeof routes)[number];

export default function Menu({ label, links, href }: MenuProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const t = useTranslations("Nav");

  const preventHoverEffect: PointerEventHandler<HTMLElement> = useCallback(
    (event) => event.preventDefault(),
    []
  );

  return (
    <NavigationMenu className="block max-xl:[&_*]:animate-none max-xl:[&>div]:static max-xl:[&_*]:justify-start max-xl:[&>div]:block max-xl:[&_div.absolute_*]:p-0 max-xl:[&_div.absolute_*]:border-none max-xl:[&_div.absolute_*]:shadow-none max-xl:[&_div.absolute_ul_li_*]:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("m-0 px-0 py-1 h-fit", {
              "text-primary-500 font-bold": isActive,
            })}
            onPointerMove={preventHoverEffect}
            onPointerLeave={preventHoverEffect}
          >
            {t(label as any)}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            onPointerEnter={preventHoverEffect}
            onPointerLeave={preventHoverEffect}
          >
            <ul className="p-5 space-y-2">
              {links?.map((i, index) => (
                <li
                  key={i.label}
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
                    <Link href={`${href}?section=${i.href}` as any}>
                      <Image
                        src={i.icon}
                        alt={i.label}
                        width={24}
                        height={24}
                      />
                      <span className="flex-1">
                        {t(`menu.${i.label}` as any)}
                      </span>
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
