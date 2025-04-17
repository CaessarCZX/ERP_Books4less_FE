import FilesProvider from '../../components/DropZone/provider';
import FilesZone from '../GeneratePO/components/FilesZone';
import SendFiles from './components/SendFiles';

const UpdateBooksPage = () => {
  return (
    <div className="w-full space-y-8">
      <FilesProvider>
        <FilesZone />
        <SendFiles />
      </FilesProvider>
    </div>
  );
};
export default UpdateBooksPage;
