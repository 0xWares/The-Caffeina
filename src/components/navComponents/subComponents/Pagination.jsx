import React, { useState } from 'react';

const Pagination = ({
  totalPages = 10,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const maxVisiblePages = 5;

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    // Always show first page
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    // Middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Always show last page
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const baseButtonStyles = `
    w-10 h-10
    rounded-full
    flex items-center justify-center
    text-sm font-medium
    border border-[#2a2826]
    transition-all duration-200
    cursor-pointer
    select-none
    bg-transparent
    text-gray-300
    hover:bg-[#1a1a1a]
    hover:border-[#3d3a36]
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-[#2a2826]
    focus:ring-offset-2
    focus:ring-offset-[#0F0F0F]
    disabled:opacity-40
    disabled:cursor-not-allowed
    disabled:hover:bg-transparent
    disabled:hover:border-[#2a2826]
    disabled:hover:text-gray-300
  `;

  const activeButtonStyles = `
    bg-white
    text-gray
    border-white
    font-semibold
    hover:bg-gray-200
    hover:border-gray-200
    hover:text-gray
  `;

  const arrowButtonStyles = `
    w-10 h-10
    rounded-full
    flex items-center justify-center
    border border-[#2a2826]
    transition-all duration-200
    cursor-pointer
    select-none
    bg-transparent
    text-gray-400
    hover:bg-[#1a1a1a]
    hover:border-[#3d3a36]
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-[#2a2826]
    focus:ring-offset-2
    focus:ring-offset-[#0F0F0F]
    disabled:opacity-30
    disabled:cursor-not-allowed
    disabled:hover:bg-transparent
    disabled:hover:border-[#2a2826]
    disabled:hover:text-gray-400
  `;

  const pages = getPageNumbers();

  return (
    <nav
      className="flex mt-10 items-center justify-center gap-1.5"
      aria-label="Pagination"
    >
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={arrowButtonStyles}
        aria-label="Go to previous page"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1.5">
        {pages.map((page, index) =>
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="w-10 h-10 flex items-center justify-center text-gray-500 text-sm select-none"
            >
              ···
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
              className={`${baseButtonStyles} ${
                page === currentPage ? activeButtonStyles : ''
              }`}
              aria-label={`Go to page ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={arrowButtonStyles}
        aria-label="Go to next page"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;