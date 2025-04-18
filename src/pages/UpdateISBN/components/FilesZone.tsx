import { FC } from 'react';
import DropZone from '../../../components/DropZone/DropZone';
import BoxUI from '../../../components/UI/BoxUI';
import AppConfig from '../../../config';

const FilesZone: FC = () => {
  const { acceptedFiles, acceptMultipleFiles } =
    AppConfig.uploadFiles.onUpdateBooksPage;
  return (
    <BoxUI>
      <DropZone acceptedFiles={acceptedFiles} multiple={acceptMultipleFiles} />
    </BoxUI>
  );
};
export default FilesZone;
