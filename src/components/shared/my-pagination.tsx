import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PageInfo } from "@/lib/types";
import { MouseEventHandler } from "react";

type Props = Pick<PageInfo, "hasNextPage" | "hasPreviousPage"> & {
  onFetchPrev: MouseEventHandler<HTMLAnchorElement>;
  onFetchNext: MouseEventHandler<HTMLAnchorElement>;
  isSecondary?: boolean;
};

export default function MyPagination({
  hasPreviousPage,
  hasNextPage,
  onFetchPrev,
  onFetchNext,
  isSecondary,
}: Props) {
  if (!hasNextPage && !hasPreviousPage) return null;

  return (
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
          onClick={onFetchPrev}
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
          onClick={onFetchNext}
          aria-disabled={!hasNextPage}
        />
      </PaginationContent>
    </Pagination>
  );
}
