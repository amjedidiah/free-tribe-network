import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fetchResourcesByCategoryId } from "@/lib/actions";
import { ResourcesIds } from "@/lib/types";
import ResourcesListContainer from "@/components/resources/resources-list-container";

export type ResourcesListProps = {
  hasOverflow?: boolean;
  isSecondary?: boolean;
  hasBorder?: boolean;
  resourceId: ResourcesIds;
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
  const fetchData = await fetchResourcesByCategoryId({
    id: resourceId,
    hideDescription,
    hasOverflow,
  });
  const props = {
    hasOverflow,
    isSecondary,
    hasBorder,
    initData: fetchData,
    params: { id: resourceId, hideDescription },
  };

  return (
    <section
      className={cn("py-10", className, {
        "bg-secondary-50": isSecondary,
      })}
    >
      <ResourcesListContainer {...props} />
    </section>
  );
}
