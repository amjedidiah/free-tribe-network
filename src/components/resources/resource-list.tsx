import { HTMLAttributes } from "react";
import ResourcesCard from "./resources-card";
import { cn } from "@/lib/utils";

type Resource = {
  title: string;
  uploadDate: string;
  src: string;
  link: string;
  description?: string | TrustedHTML;
};

type Props = {
  resources: Resource[];
  hasOverflow?: boolean;
  title: string;
  isSecondary?: boolean;
  hasBorder?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default function ResourceList({
  resources,
  className,
  hasOverflow = false,
  title,
  isSecondary = false,
  hasBorder = false,
}: Props) {
  return (
    <section
      className={cn("py-10", className, {
        "bg-secondary-50": isSecondary,
      })}
    >
      <div
        className={cn("container flex flex-col gap-8", {
          "lg:overflow-x-visible": hasOverflow,
        })}
      >
        <h2>{title}</h2>
        <div
          className={cn("gap-6", {
            "flex max-sm:flex-wrap lg:overflow-auto lg:min-w-[100vw] pb-8 sm:pr-40":
              hasOverflow,
            "grid sm:grid-cols-2 lg:grid-cols-3": !hasOverflow,
          })}
        >
          {resources.map((item) => (
            <ResourcesCard
              key={item.title}
              className={cn({
                "min-w-96 w-full": hasOverflow,
                "[&_a]:bg-secondary-500": isSecondary,
                "[&_a]:bg-primary-500": !isSecondary,
                "border-[6px] ": hasBorder,
                "border-secondary-100": hasBorder && isSecondary,
                "border-primary-100": hasBorder && !isSecondary,
              })}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
