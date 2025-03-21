import '../styles/App.css';

const DropZone = () => {
  return;
  <>
    <div className="dropzone">
      <div className="relative w-full">
        <div className="items-center  justify-center max-w-xl mx-auto">
          <label
            className="flex p-6 justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
            id="drop"
          >
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline ml-[4px]">browse</span>
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
    </div>
  </>;
};

export default DropZone;
