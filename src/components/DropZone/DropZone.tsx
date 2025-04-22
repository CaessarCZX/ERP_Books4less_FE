import { FC, useRef } from 'react';
import { useFiles } from './hooks/useFiles';
import DropZoneFilledStage from './components/DropZoneFilledStage';
import DropZoneCleanStage from './components/DropZoneCleanStage';
import { Button } from '../UI/Button';
import { MdCloudUpload } from 'react-icons/md';
import { PiFilePlusBold } from 'react-icons/pi';

// import DropZoneCleanStage from './components/DropZoneCleanStage';

interface Props {
  acceptedFiles: string;
  multiple?: boolean;
  sendToServer?: boolean;
}

const DropZone: FC<Props> = ({
  acceptedFiles,
  multiple = true,
  sendToServer = true,
}) => {
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
                <div className="flex max-w-30 flex-col items-center gap-4">
                  {sendToServer && (
                    <Button
                      fullWidth
                      noMargin
                      onClick={triggerFileInput}
                      variant="black"
                    >
                      <MdCloudUpload className="h-4 w-4 text-white" />
                      Upload
                    </Button>
                  )}
                  {multiple && (
                    <Button
                      fullWidth
                      noMargin
                      onClick={triggerFileInput}
                      variant="black"
                    >
                      <PiFilePlusBold className="h-4 w-4 text-white" />
                      Attach
                    </Button>
                  )}
                </div>
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
