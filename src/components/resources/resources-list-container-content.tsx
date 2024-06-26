import ResourcesCard from "@/components/resources/resources-card";
import { cn } from "@/lib/utils";
import { FetchCategoriesByIdData, ResourceListMainProps } from "@/lib/types";
import ShouldRender from "@/components/shared/should-render";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

type Props = Pick<FetchCategoriesByIdData, "title" | "resourceList"> &
  ResourceListMainProps;

export default function ResourcesListContainerContent({
  title,
  resourceList,
  isSecondary,
  hasBorder,
  hasOverflow,
}: Props) {
  const t = useTranslations("Loading");

  return (
    <Fragment>
      <ShouldRender condition={!resourceList?.length}>
        <article className="col-span-full text-center grid gap-3 p-8">
          <h5>
            {t.rich("Empty Resources", {
              span: (chunks) => <span className="font-medium">{chunks}</span>,
              title,
            })}
          </h5>
        </article>
      </ShouldRender>
      <ShouldRender condition={!!resourceList?.length}>
        <div
          className={cn("gap-6", {
            "flex max-sm:flex-wrap sm:overflow-auto sm:min-w-[100vw] pb-8 sm:pr-40":
              hasOverflow,
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": !hasOverflow,
          })}
        >
          {resourceList?.map((item, i) => (
            <ResourcesCard
              key={`${item.title}-${i}`}
              className={cn({
                "basis-full sm:basis-[356px] lg:basis-[322px] xl:basis-[350px] sm:flex-grow-0 sm:flex-shrink-0":
                  hasOverflow,
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
      </ShouldRender>
    </Fragment>
  );
}
