"use client";

import ContentImageClient from "@/components/shared/content-image-client";
import { Link, usePathname } from "@/lib/i18n.config";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu as Burger } from "lucide-react";
import { routes } from "@/lib/data";
import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavLink from "@/components/layout/nav-link";
import LocaleSelector from "@/components/layout/locale-selector";
import { useTranslations } from "next-intl";
import ShouldRender from "@/components/shared/should-render";
import Search from "@/components/layout/search/search";
import { useSearchParams } from "next/navigation";
import { useCookiesConsentContext } from "@/context/cookies-consent-context";
import { ClientContentImageTitle } from "@/lib/types";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const isResourcesPage = pathname === "/resources";
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const tLayout = useTranslations("Layout");
  const { shouldShowSearch } = useCookiesConsentContext();

  useEffect(
    () => setIsOpen((prev) => (prev ? false : prev)),
    [pathname, section]
  );

  return (
    <header className="fixed w-full z-10 shadow">
      <div className="border-b border-gray-100 bg-whitesmoke">
        <div className="container pt-[10px] pb-[5px] justify-between flex items-center gap-10">
          <ShouldRender condition={shouldShowSearch}>
            <Search />
          </ShouldRender>
          <LocaleSelector />
        </div>
      </div>
      <nav className="bg-white border-b border-gray-100">
        <div
          className={cn(
            {
              "grid-rows-[auto,auto]": isOpen,
            },
            "container grid xl:grid-rows-1 grid-cols-[auto,auto] justify-between items-center py-3"
          )}
        >
          <Link href="/">
            <ContentImageClient
              title={ClientContentImageTitle.HeaderLogo}
              width={60}
              height={57}
            />
          </Link>
          <div
            className={cn(
              {
                hidden: !isOpen,
                "flex flex-col border-t border-slate-600 col-start-1 col-end-4 pt-4 pb-2 mt-4":
                  isOpen,
              },
              "xl:flex xl:flex-row xl:border-none xl:items-center xl:py-0 xl:mt-0 gap-x-20 gap-y-5 xl:justify-end xl:col-start-2"
            )}
          >
            <ul className="flex flex-col xl:flex-row gap-x-6 gap-y-2 xl:items-center capitalize">
              {routes.map((route) => (
                <NavLink key={route.label} route={route} />
              ))}
            </ul>
            <div className="flex gap-6 items-center">
              <ShouldRender condition={!isResourcesPage}>
                <ScrollLink to={tLayout("Contact.id")} href="" smooth>
                  <Button variant="outline">{t("Contact Us")}</Button>
                </ScrollLink>
              </ShouldRender>
              <ShouldRender condition={isResourcesPage}>
                <a href="https://wa.me/+2348153494508">
                  <Button variant="outline">{t("Contact Us")}</Button>
                </a>
              </ShouldRender>
              <Link href="/donate">
                <Button>{t("Donate")}</Button>
              </Link>
            </div>
          </div>

          <Button
            className="xl:hidden col-start-3 row-start-1"
            variant="outline"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="menu button"
          >
            <Burger />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default memo(Nav);
