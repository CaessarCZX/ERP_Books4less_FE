const Input = () => {
  return (
    <>
      <div className="bg-white md:w-100 d shadow-md rounded px-1 py-2">
        <div className="flex flex-col ">
          <label
            htmlFor="in"
            className="text-base font-medium text-black dark:text-gray-300 mb-2"
          >
            Input
          </label>
          <input
            id="in"
            type="text"
            className="text-sm  leading-none font-medium rounded-3 px-2 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-white dark:bg-gray-800 dark:text-white"
            placeholder="Input"
            minLength={5}
            maxLength={100}
            pattern="[a-zA-Z0-9]+"
            title="Solo letras y números permitidos"
            autoComplete="off"
            required
          />
        </div>
      </div>
    </>
  );
};

export default Input;
