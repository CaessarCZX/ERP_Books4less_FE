const Upload = () => {
  return (
    <div className="mx-auto max-w-xs">
      <label
        htmlFor="example1"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Upload file
      </label>
      <input
        id="example1"
        type="file"
        className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
      />
    </div>
  );
};
export default Upload;
