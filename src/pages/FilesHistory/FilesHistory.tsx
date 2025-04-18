import { useState } from 'react';
import FilesTable from '../../components/FilesTable/FilesTable';
import SearchBar from '../../components/SearchFilesBar';
import { useGetFiles } from '../../hooks/useGetFiles';
import { IGetFiles } from '../../models/get-files-model';
import DotsLoader from '../../components/Loader/Dots/DotsLoader';
import PaginationTable from '../../components/FilesTable/PaginationTable';

const FilesHistory = () => {
  const [input, setInput] = useState<IGetFiles>();
  const { filesQuery, page, nextPage, prevPage } = useGetFiles(input);
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
          <PaginationTable
            currentPage={page}
            totalPages={filesQuery.data?.pagination.pages || 0}
            totalItems={filesQuery.data?.pagination.total || 0}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      )}
    </>
  );
};
export default FilesHistory;
