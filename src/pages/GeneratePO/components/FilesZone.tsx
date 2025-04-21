import { FC } from 'react';
import DropZone from '../../../components/DropZone/DropZone';
import BoxUI from '../../../components/UI/BoxUI';
import AppConfig from '../../../config';

const FilesZone: FC = () => {
  const { acceptedFiles, acceptMultipleFiles } =
    AppConfig.uploadFiles.onGeneratorPOPage;
  return (
    <>
      <BoxUI className="flex-1">
        <DropZone
          acceptedFiles={acceptedFiles}
          multiple={acceptMultipleFiles}
        />
      </BoxUI>
    </>
  );
};
export default FilesZone;
