"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("ms-auto flex w-full justify-end", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const paginationLinkStyles = {
  default:
    "inline-flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-medium text-[#374151] hover:bg-[#F9FAFB] transition-colors disabled:pointer-events-none disabled:opacity-50",
  active:
    "border-[#F97316] bg-white text-[#111827] hover:bg-white hover:text-[#111827]",
  ghost: "border-transparent bg-transparent hover:bg-[#F3F4F6]",
};

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  children,
  ...props
}) => {
  const isIcon = size === "icon";
  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationLinkStyles.default,
        isActive ? paginationLinkStyles.active : paginationLinkStyles.ghost,
        isIcon ? "size-9 min-w-9" : "gap-1",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="size-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4 text-[#6B7280]" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

/**
 * Returns an array of page numbers to display, with 'ellipsis' for gaps.
 * e.g. [1, 2, 'ellipsis', 5, 6, 7, 'ellipsis', 10]
 */
function getPaginationRange(currentPage, totalPages, siblingCount = 1) {
  if (totalPages <= 0) return [];
  const oneBased = currentPage + 1;
  const total = Math.min(Math.max(1, totalPages), 100);
  const ELLIPSIS = "ellipsis";

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(oneBased - siblingCount, 1);
  const rightSibling = Math.min(oneBased + siblingCount, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + 2 * siblingCount;
    return [
      ...Array.from({ length: leftCount }, (_, i) => i + 1),
      ELLIPSIS,
      total,
    ];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + 2 * siblingCount;
    return [
      1,
      ELLIPSIS,
      ...Array.from(
        { length: rightCount },
        (_, i) => total - rightCount + 1 + i,
      ),
    ];
  }
  if (showLeftEllipsis && showRightEllipsis) {
    return [
      1,
      ELLIPSIS,
      ...Array.from(
        { length: rightSibling - leftSibling + 1 },
        (_, i) => leftSibling + i,
      ),
      ELLIPSIS,
      total,
    ];
  }
  return Array.from({ length: total }, (_, i) => i + 1);
}

/**
 * TablePagination – shared footer for all data tables.
 * Renders "Showing X to Y of Z", optional per-page selector, and Previous + page numbers + Next.
 *
 * @param {number} currentPage - 0-based current page index
 * @param {number} total - total number of items
 * @param {number} pageSize - items per page
 * @param {(page: number) => void} onPageChange - called with 0-based page index
 * @param {{ value: number, label: string }[]} [pageSizeOptions] - if provided, show per-page dropdown
 * @param {(size: number) => void} [onPageSizeChange] - required when pageSizeOptions is provided
 */
function TablePagination({
  currentPage,
  total,
  pageSize,
  onPageChange,
  pageSizeOptions,
  onPageSizeChange,
}) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageNumbers = getPaginationRange(currentPage, totalPages);
  const from = currentPage * pageSize + 1;
  const to = Math.min((currentPage + 1) * pageSize, total);

  if (total <= 0) return null;

  return (
    <div className="px-4 sm:px-6 py-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <span className="text-sm text-[#6B7280]">
          Showing {from} to {to} of {total} results
        </span>
        {pageSizeOptions?.length && onPageSizeChange && (
          <select
            value={pageSize}
            onChange={(e) => {
              onPageSizeChange(Number(e.target.value));
              onPageChange(0);
            }}
            className="min-w-[130px] px-3 py-2 border border-[#D1D5DB] rounded-lg text-sm text-[#374151] bg-white focus:outline-none focus:ring-1 focus:ring-[#F97316] focus:border-[#F97316]"
          >
            {pageSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </div>
      <Pagination className="justify-end w-full sm:w-auto">
        <PaginationContent className="gap-1">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
            />
          </PaginationItem>
          {pageNumbers.map((page, idx) =>
            page === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page - 1}
                  onClick={() => onPageChange(page - 1)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              disabled={(currentPage + 1) * pageSize >= total}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  getPaginationRange,
  TablePagination,
};
