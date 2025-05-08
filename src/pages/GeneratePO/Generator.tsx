import FilesProvider from '../../components/DropZone/provider';
import FilesZone from './components/FilesZone';
import FormZone from './components/FormZone';

const GeneratorPO = () => {
  return (
    <div className="w-full space-y-7 border-black">
      <FilesProvider>
        <FilesZone />
        <FormZone />
      </FilesProvider>
    </div>
  );
};

export default GeneratorPO;
