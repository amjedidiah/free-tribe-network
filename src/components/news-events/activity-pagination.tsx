import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ActivityPagination() {
  return (
    <Pagination className="pt-5">
      <PaginationContent className="w-full flex justify-between text-gray-500 text-sm font-medium">
        <PaginationPrevious className="cursor-pointer" />
        <PaginationNext className="cursor-pointer" />
      </PaginationContent>
    </Pagination>
  );
}
