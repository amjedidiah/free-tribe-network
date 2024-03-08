"use client";
import ResourcesCard from "@/components/resources/resources-card";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useResourcesList, {
  UseResourcesListProps,
} from "@/hooks/use-resources-list";
import { ResourcesListProps } from "@/components/resources/resources-list";
import ShouldRender from "@/components/shared/should-render";

type Props = Pick<
  ResourcesListProps,
  "hasOverflow" | "isSecondary" | "hasBorder"
> &
  UseResourcesListProps;

export default function ResourcesListContainer({
  hasOverflow,
  isSecondary,
  hasBorder,
  ...rest
}: Props) {
  const {
    title,
    resourceList,
    handleFetchNext,
    handleFetchPrev,
    hasNextPage,
    hasPreviousPage,
  } = useResourcesList(rest);

  return (
    <div
      className={cn("container flex flex-col gap-8", {
        "lg:overflow-x-visible": hasOverflow,
      })}
    >
      <h2>{title}</h2>
      <ShouldRender condition={Boolean(!resourceList.length)}>
        <article className="col-span-full text-center grid gap-3 p-8">
          <h5>
            No <span className="font-medium">{title}</span> yet
          </h5>
        </article>
      </ShouldRender>
      <ShouldRender condition={Boolean(resourceList.length)}>
        <div
          className={cn("gap-6", {
            "flex max-sm:flex-wrap sm:overflow-auto sm:min-w-[100vw] pb-8 sm:pr-40":
              hasOverflow,
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": !hasOverflow,
          })}
        >
          {resourceList.map((item, i) => (
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

      <ShouldRender condition={Boolean(!hasOverflow && resourceList.length)}>
        <Pagination className="pt-5">
          <PaginationContent className="w-full flex justify-between text-gray-500 text-sm font-medium">
            <PaginationPrevious
              className={cn("cursor-pointer", {
                "text-gray-500 hover:bg-transparent hover:text-gray-500 cursor-not-allowed":
                  !hasPreviousPage,
                "border-4 hover:bg-transparent": hasPreviousPage,
                "text-primary-500 hover:text-primary-500 border-primary-100":
                  hasPreviousPage && !isSecondary,
                "text-secondary-500 hover:text-secondary-500 border-secondary-100":
                  hasPreviousPage && isSecondary,
              })}
              onClick={handleFetchPrev}
              aria-disabled={!hasPreviousPage}
            />
            <PaginationNext
              className={cn("cursor-pointer", {
                "text-gray-500 hover:bg-transparent hover:text-gray-500 cursor-not-allowed":
                  !hasNextPage,
                "border-4 hover:bg-transparent": hasNextPage,
                "text-primary-500 hover:text-primary-500 border-primary-100":
                  hasNextPage && !isSecondary,
                "text-secondary-500 hover:text-secondary-500 border-secondary-100":
                  hasNextPage && isSecondary,
              })}
              onClick={handleFetchNext}
              aria-disabled={!hasNextPage}
            />
          </PaginationContent>
        </Pagination>
      </ShouldRender>
    </div>
  );
}
