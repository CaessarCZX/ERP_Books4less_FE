import { useState } from 'react';
import FilesTable from '../../components/FilesTable/FilesTable';
import SearchBar from '../../components/SearchFilesBar';
import { useGetFiles } from '../../hooks/useGetFiles';
import { IGetFiles } from '../../models/get-files-model';
import DotsLoader from '../../components/Loader/Dots/DotsLoader';
import { PaginationNumbers } from '../../components/FilesTable/paginations';
// import { CommonPagination } from '../../components/FilesTable/paginations';

const FilesHistory = () => {
  const [input, setInput] = useState<IGetFiles>();
  const { filesQuery, page, setPage } = useGetFiles(input);
  return (
    <>
      <div className="mb-4">
        <SearchBar setInput={setInput} />
      </div>
      {filesQuery.isPending ? (
        <DotsLoader />
      ) : (
        <>
          <FilesTable data={filesQuery.data?.files || []} />
          <div className="mt-4 w-full text-right">
            <PaginationNumbers
              currentPage={page}
              onPageChange={setPage}
              totalPages={filesQuery.data?.pagination.pages || 0}
            />
          </div>
        </>
      )}
    </>
  );
};
export default FilesHistory;
