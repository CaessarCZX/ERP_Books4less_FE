import { FC, useRef } from 'react';
import { useFiles } from './hooks/useFiles';
import DropZoneFilledStage from './components/DropZoneFilledStage';
import DropZoneCleanStage from './components/DropZoneCleanStage';
import { Button } from '../UI/Button';
// import DropZoneCleanStage from './components/DropZoneCleanStage';

interface Props {
  acceptedFiles: string;
  multiple?: boolean;
}

const DropZone: FC<Props> = ({ acceptedFiles, multiple = true }) => {
  const { files, addFiles } = useFiles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(Array.from(event.target.files));
      event.target.value = '';
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      addFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="relative w-full">
        <div className="mx-auto items-center justify-center">
          <label
            // ${isValid ? 'border-gray-300' : 'border-red-500'}
            className={`flex min-h-34 w-full cursor-pointer appearance-none justify-center gap-8 rounded-md border-2 border-dashed border-gray-300 bg-white p-4 px-4 transition hover:border-gray-400 focus:outline-none`}
            id="drop"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {files.length > 0 ? (
              <>
                <DropZoneFilledStage files={files} />
                {multiple && (
                  <Button noMargin onClick={triggerFileInput} variant="black">
                    Add files
                  </Button>
                )}
              </>
            ) : (
              <DropZoneCleanStage />
            )}
            <input
              type="file"
              name="file_upload"
              multiple={multiple}
              accept={acceptedFiles}
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default DropZone;
