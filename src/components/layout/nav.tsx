"use client";

import ContentImageClient from "@/components/shared/content-image-client";
import { Link } from "@/lib/i18n.config";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Menu as Burger } from "lucide-react";
import { routes } from "@/lib/data";
import { Suspense, memo, useState } from "react";
import { cn } from "@/lib/utils";
import NavLink from "@/components/layout/nav-link";
import LocaleSelector from "@/components/layout/locale-selector";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-10 shadow">
      <div className="border-b border-gray-100 bg-whitesmoke">
        <div className="container pt-[10px] pb-[5px] justify-between flex items-center gap-10">
          <form action=""></form>
          <Suspense fallback={null}>
            <LocaleSelector />
          </Suspense>
        </div>
      </div>
      <nav className="bg-white border-b border-gray-100">
        <div
          className={cn(
            {
              "grid-rows-[auto,auto]": isOpen,
            },
            "container grid lg:grid-rows-1 grid-cols-[auto,auto] justify-between items-center py-3"
          )}
        >
          <Link href="/">
            <ContentImageClient title="logo" width={60} height={57} />
          </Link>
          <div
            className={cn(
              {
                hidden: !isOpen,
                "flex flex-col border-t border-slate-600 col-start-1 col-end-4 pt-4 pb-2 mt-4":
                  isOpen,
              },
              "lg:flex lg:flex-row lg:border-none lg:items-center lg:py-0 lg:mt-0 gap-x-20 gap-y-5 lg:justify-end lg:col-start-2"
            )}
          >
            <ul className="flex flex-col lg:flex-row gap-x-6 gap-y-2 lg:items-center capitalize">
              {routes.map((route) => (
                <NavLink key={route.label} route={route} />
              ))}
            </ul>
            <div className="flex gap-6 items-center">
              <ScrollLink to="contact-us" smooth>
                <Button variant="outline">Contact Us</Button>
              </ScrollLink>
              <Link href="/donate">
                <Button>Donate</Button>
              </Link>
            </div>
          </div>

          <Button
            className="lg:hidden col-start-3 row-start-1"
            variant="outline"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Burger />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default memo(Nav);