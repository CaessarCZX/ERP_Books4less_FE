import { FC } from 'react';
import DropZone from '../../../components/DropZone/DropZone';
import BoxUI from '../../../components/UI/BoxUI';

const FilesZone: FC = () => {
  return (
    <BoxUI>
      <DropZone />
    </BoxUI>
  );
};
export default FilesZone;
