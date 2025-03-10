import Menu from "@/components/layout/menu";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/data";
import { memo } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = { route: (typeof routes)[number] };

function NavLink({ route }: Props) {
  const pathname = usePathname();
  const t = useTranslations("Nav");

  return route.links ? (
    <Menu key={route.label} {...route} />
  ) : (
    <li
      className={cn("mx-0 py-1 relative xl:my-auto", {
        "text-primary-500 [&_a]:font-bold": route.href === pathname,
      })}
    >
      <Link href={route.href as any}>{t(route.label as any)}</Link>
    </li>
  );
}

export default memo(NavLink);
