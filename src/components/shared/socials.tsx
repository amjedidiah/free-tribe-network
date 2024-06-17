"use client";
import { socials } from "@/lib/data";
import CustomIcon from "@/components/shared/icon";
import { HTMLAttributes, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  FaInstagram,
  FaMedium,
  FaFacebook,
  FaTiktok,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Socials({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex gap-6", className)}>
      {socials.map((item) => (
        <SocialItem key={item.name} {...item} />
      ))}
    </div>
  );
}

function SocialItem({ href, name }: { href: string; name: string }) {
  const Icon = useMemo(
    () =>
      ({
        x: FaXTwitter,
        facebook: FaFacebook,
        instagram: FaInstagram,
        tiktok: FaTiktok,
        medium: FaMedium,
      }[name] || FaLinkedin),
    [name]
  );

  return (
    <a
      href={href}
      className="w-5 h-5 lg:w-6 lg:h-6 relative flex items-center"
      key={name}
      aria-label={`Social media page on ${name}`}
    >
      <span className="hidden">{name}</span>
      <CustomIcon icon={Icon} />
    </a>
  );
}
