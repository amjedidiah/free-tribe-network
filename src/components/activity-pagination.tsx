import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ActivityPagination() {
  return (
    <Pagination className="w-full text-gray-500">
      <PaginationContent className="flex justify-between w-full">
        <PaginationPrevious />
        <div className="flex gap-2">
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationEllipsis />
          <PaginationLink href="#">7</PaginationLink>
          <PaginationLink href="#">8</PaginationLink>
          <PaginationLink href="#">9</PaginationLink>
        </div>
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  );
}
