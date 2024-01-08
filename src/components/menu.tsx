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
import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuProps = {
  label: string;
  links: {
    label: string;
    href: string;
    icon: string;
  }[];
};

export default function Menu({ label, links }: MenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m-0 p-0 font-light">{label}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 text-base space-y-2">
              {links.map((i, index) => (
                <li
                  key={index}
                  className="text-secondary cursor-pointer hover:bg-gray-100 rounded-md"
                >
                  <Link href={i.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-4")}>
                      <Image src={i.icon} alt={i.label} width={24} height={24} />
                      {i.label}
                    </NavigationMenuLink>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
