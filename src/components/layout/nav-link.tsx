"use client";
import Menu from "@/components/layout/menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/data";
import { memo } from "react";
import { Link } from "@/lib/i18n.config";
import { useTranslations } from "next-intl";

type Props = { route: (typeof routes)[number] };

function NavLink({ route }: Props) {
  const pathname = usePathname();
  const desiredPath = pathname.split("/").at(2);
  const t = useTranslations("Nav");

  return route.links ? (
    <Menu key={route.label} {...route} />
  ) : (
    <li
      className={cn("mx-0 py-1 relative lg:my-auto", {
        "text-primary-500 [&_a]:font-bold":
          route.href === `/${desiredPath}` ||
          (!desiredPath && route.href === "/"),
      })}
    >
      <Link href={route.href as any}>{t(route.label as any)}</Link>
    </li>
  );
}

export default memo(NavLink);
