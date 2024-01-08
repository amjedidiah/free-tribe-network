import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Menu from "./menu";
import { Menu as Burger } from "lucide-react";
import { routes } from "@/lib/data";

export default function Nav() {
  return (
    <nav className="bg-white h-20 border-b flex items-center">
      <div className="container flex items-center justify-between">
        <Image src="/images/logo.webp" alt="logo" width={49} height={47} />
        <ul className="hidden lg:flex gap-8 items-center capitalize">
          {routes.map((route) =>
            route.links ? (
              <Menu key={route.label} label={route.label} links={route.links} />
            ) : (
              <li key={route.label}>
                <Link href={route.href}>{route.label}</Link>
              </li>
            )
          )}
          <div className="flex gap-8 items-center">
            <Button variant={"outline"}>Contact Us</Button>
            <Button>Donate</Button>
          </div>
        </ul>
        <Burger className="lg:hidden" />
      </div>
    </nav>
  );
}
