import { FC } from 'react';
import { FaFileExcel } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { useFiles } from '../hooks/useFiles';

interface Props {
  files: File[];
}

const DropZoneFilledStage: FC<Props> = ({ files }) => {
  const { removeFile } = useFiles();

  const justifySelector =
    files.length > 5 ? 'justify-center' : 'justify-beetween';
  return (
    <div className={`flex w-full flex-wrap ${justifySelector} gap-4`}>
      {files.map((file, index) => (
        <div
          key={index}
          className="relative flex h-25 w-25 flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300 p-2 shadow-md"
        >
          <div className="">
            <FaFileExcel className="text-4xl text-white" />
          </div>
          <span className="max-w-20 truncate text-sm font-bold text-white">
            {file.name}
          </span>
          <button
            className="absolute -top-2 -right-3 cursor-pointer rounded-full bg-red-400 p-0.5 hover:scale-110"
            onClick={() => removeFile(index)}
          >
            <IoMdClose className="h-5 w-5 fill-white" />
          </button>
        </div>
      ))}
    </div>
  );
};
export default DropZoneFilledStage;
