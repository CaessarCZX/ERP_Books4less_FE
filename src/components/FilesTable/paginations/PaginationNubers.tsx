import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PaginationProps {
  totalPages: number;
  siblingCount?: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

const PaginationNumbers: React.FC<PaginationProps> = ({
  totalPages,
  siblingCount = 1,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange?.(page);
  };

  const getPaginationRange = () => {
    const totalNumbers = siblingCount * 2 + 5;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 2;

    const range: (number | string)[] = [];

    if (!showLeftDots && showRightDots) {
      const leftRange = Array.from(
        { length: 3 + 2 * siblingCount },
        (_, i) => i + 1
      );
      range.push(...leftRange, '...', totalPages);
    } else if (showLeftDots && !showRightDots) {
      const rightRange = Array.from(
        { length: 3 + 2 * siblingCount },
        (_, i) => totalPages - (3 + 2 * siblingCount) + i + 1
      );
      range.push(1, '...', ...rightRange);
    } else if (showLeftDots && showRightDots) {
      const middleRange = Array.from(
        { length: 2 * siblingCount + 1 },
        (_, i) => leftSibling + i
      );
      range.push(1, '...', ...middleRange, '...', totalPages);
    }

    return range;
  };

  const paginationRange = getPaginationRange();

  return (
    <nav className="shadow-soft-2xl inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white text-sm font-medium">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 items-center justify-center border-r border-gray-200 px-3 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
      >
        <IoChevronBack size={16} />
      </button>

      {paginationRange.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`flex h-10 w-10 items-center justify-center border-r border-gray-200 ${
              currentPage === page
                ? 'font-semibold text-[#5B57FF]'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ) : (
          <span
            key={index}
            className="flex h-10 w-10 items-center justify-center border-r border-gray-200 text-gray-400"
          >
            ...
          </span>
        )
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 items-center justify-center px-3 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
      >
        <IoChevronForward size={16} />
      </button>
    </nav>
  );
};

export { PaginationNumbers };
