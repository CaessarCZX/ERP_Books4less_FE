// DropZone.tsx
import { FC, useRef } from 'react';
import { useFiles } from './hooks/useFiles';
import DropZoneFilledStage from './components/DropZoneFilledStage';
import DropZoneCleanStage from './components/DropZoneCleanStage';
import { Button } from '../UI/Button';
import { PiFilePlusBold } from 'react-icons/pi';
import SendFiles from './components/SendFiles';

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
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      addFiles(Array.from(fileList));
    }
    event.target.value = '';
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files.length > 0) {
      addFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative w-full">
      <div className="mx-auto items-center justify-center">
        <div
          className="flex min-h-34 w-full cursor-pointer justify-center gap-8 rounded-md border-2 border-dashed border-gray-300 bg-white p-4 px-4 transition hover:border-gray-400 focus:outline-none"
          onClick={triggerFileInput} // ← aquí
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {files.length > 0 ? (
            <>
              <DropZoneFilledStage files={files} />
              <div className="flex max-w-30 flex-col items-center gap-4">
                {sendToServer && <SendFiles />}
                {multiple && (
                  <Button
                    fullWidth
                    noMargin
                    onClick={(e) => {
                      e.stopPropagation(); // evita que el wrapper vuelva a abrir el input
                      triggerFileInput();
                    }}
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
        </div>
      </div>
    </div>
  );
};

export default DropZone;
