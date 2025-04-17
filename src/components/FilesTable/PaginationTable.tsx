import { FC } from 'react';
import { Button } from '../UI/Button';

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  prevPage: () => void;
  nextPage: () => void;
}

const ITEMS_PER_PAGE = 10;

const PaginationTable: FC<Props> = ({
  currentPage,
  totalPages,
  totalItems,
  prevPage,
  nextPage,
}) => {
  const isPrevButtonDisabled = currentPage === 1;
  const isNextButtonDisabled =
    currentPage >= Math.ceil(totalItems / ITEMS_PER_PAGE);
  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        <span className="text-sm text-gray-700">
          {`Showing ${totalItems > 0 ? '1' : '0'} to ${totalItems} of ${totalPages} entries`}
        </span>
      </div>
      <div className="flex space-x-2">
        <Button
          onClick={prevPage}
          disabled={isPrevButtonDisabled}
          variant="black"
        >
          Previus
        </Button>
        <Button
          onClick={nextPage}
          disabled={isNextButtonDisabled}
          variant="black"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default PaginationTable;
