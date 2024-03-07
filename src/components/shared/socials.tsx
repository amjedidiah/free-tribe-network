import { socials } from "@/lib/data";
import CustomIcon from "@/components/shared/icon";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Socials({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex gap-6", className)}>
      {socials.map(({ name, href, Icon }) => (
        <a
          href={href}
          className="w-5 h-5 lg:w-6 lg:h-6 relative flex items-center"
          key={name}
        >
          <span className="hidden">{name}</span>
          <CustomIcon icon={Icon} />
        </a>
      ))}
    </div>
  );
}
