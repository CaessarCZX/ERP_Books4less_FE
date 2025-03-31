import { HiOutlineCloudUpload } from 'react-icons/hi';

// lg:max-w-235
const DropZone = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="mx-auto items-center justify-center">
          <label
            className="flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white p-6 px-4 transition hover:border-gray-400 focus:outline-none"
            id="drop"
          >
            <span className="flex items-center space-x-2">
              <HiOutlineCloudUpload className="h-6 w-6 text-gray-600" />
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="ml-[4px] text-blue-600 underline">browse</span>
              </span>
            </span>
            <input
              type="file"
              name="file_upload"
              className="hidden"
              accept="image/png,image/jpeg"
              id="input"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default DropZone;
