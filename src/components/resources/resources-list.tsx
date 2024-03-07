import { HTMLAttributes } from "react";
import ResourcesCard from "@/components/resources/resources-card";
import { cn } from "@/lib/utils";
import { fetchResourcesByCategoryId } from "@/lib/actions";

export type ResourcesListProps = {
  hasOverflow?: boolean;
  isSecondary?: boolean;
  hasBorder?: boolean;
  resourceId: string;
  hideDescription?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export default async function ResourcesList({
  className,
  hasOverflow = false,
  isSecondary = false,
  hasBorder = false,
  resourceId,
  hideDescription = false,
}: ResourcesListProps) {
  const { resourceList, title } = await fetchResourcesByCategoryId(
    resourceId,
    hideDescription
  );
  if (!resourceList?.length) return null;

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
            "flex max-sm:flex-wrap sm:overflow-auto sm:min-w-[100vw] pb-8 sm:pr-40":
              hasOverflow,
            "grid sm:grid-cols-2 lg:grid-cols-3": !hasOverflow,
          })}
        >
          {resourceList?.map((item, i) => (
            <ResourcesCard
              key={`${item.title}-${i}`}
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
