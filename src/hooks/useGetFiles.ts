import { useQuery } from '@tanstack/react-query';
import { IGetFiles, IGetFilesResponse } from '../models/get-files-model';
import FilesService from '../services/files-service';
import GetFilesAdapter from '../adapters/get-files-adapter';
import { useState } from 'react';
// import { useUser } from './useUser';

export const useGetFiles = ({
  fileName,
  typeFile,
}: Partial<IGetFiles> = {}) => {
  // const { id } = useUser();  <======= enable to request by unique user id
  const [page, setPage] = useState(1);

  const filesQuery = useQuery({
    // queryKey: ['filesHistory', { userId, fileName, typeFile, page }], <=== modify for using with unique user id
    queryKey: ['filesHistory', '1234', { fileName, typeFile, page }],
    queryFn: () =>
      FilesService.getFilesData({ userId: '1234', fileName, typeFile, page }),
    select: (data: IGetFilesResponse) => new GetFilesAdapter(data).getData(),
    staleTime: 1000 * 60 * 2, // two minutes
    refetchOnWindowFocus: false,
  });

  // For Common pagination methods
  // useEffect(() => {
  //   setPage(1);
  // }, [typeFile]);

  // useEffect(() => {
  //   setPage(1);
  // }, [fileName]);

  // const prevPage = () => {
  //   if (page === 1) return;

  //   setPage((prevPage) => prevPage - 1);
  // };

  // const nextPage = () => {
  //   if (filesQuery.data?.files.length === 0) return;

  //   setPage((prevPage) => prevPage + 1);
  // };

  return { filesQuery, page, setPage };
};
