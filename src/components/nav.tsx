import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Who  we are",
    href: "/who-we-are",
  },
  {
    label: "Our Initiatives",
    href: "/initiatives",
  },
  {
    label: "News & Events",
    href: "/news",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export default function Nav() {
  return (
    <nav className="bg-white py-4 lg:px-20 border-b">
      <div className="container-custom flex justify-between">
        <Image src="/images/logo.webp" alt="logo" width={49} height={47} />
        <ul className="hidden lg:flex gap-8 items-center capitalize">
          {routes.map((route) => (
            <li key={route.label}>
              <Link href={route.href}>{route.label}</Link>
            </li>
          ))}
          <div className="flex gap-8 items-center">
            <Button variant={"outline"}>Contact Us</Button>
            <Button>Donate</Button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
