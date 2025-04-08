import { HiOutlineCloudUpload } from 'react-icons/hi';

const DropZoneCleanStage = () => {
  return (
    <span className="flex items-center space-x-2">
      <HiOutlineCloudUpload className="h-6 w-6 text-gray-600" />
      <span className="font-medium text-gray-600">
        Drop files to Attach, or
        <span className="ml-[4px] text-blue-600 underline">browse</span>
      </span>
    </span>
  );
};
export default DropZoneCleanStage;
