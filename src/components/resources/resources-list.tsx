import { cn } from "@/lib/utils";
import { FetchCategoriesByIdData, ResourcesListProps } from "@/lib/types";
import ResourcesListContainer from "@/components/resources/resources-list-container";
import { fetchResourcesByCategoryId } from "@/lib/actions/wordpress";

export default async function ResourcesList({
  className,
  hasOverflow = false,
  isSecondary = false,
  hasBorder = false,
  resourceId,
  hideDescription = false,
}: ResourcesListProps) {
  const params = {
    id: resourceId,
    hideDescription,
  };
  // const data = await fetchResourcesByCategoryId(params);
  const data = {} as FetchCategoriesByIdData;

  const props = {
    hasOverflow,
    isSecondary,
    hasBorder,
    params,
    initData: data,
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
