const ComboBox = () => {
  return (
    <>
      <div className="flex dark:bg-gray-800">
        <div className="d rounded bg-white px-1 py-2 shadow-md">
          <div className="flex flex-col">
            <label
              htmlFor="text"
              className="mb-2 text-base font-medium text-black dark:text-gray-300"
            >
              Input
            </label>
            <input
              placeholder="Input"
              type="text"
              multiple
              name="text"
              id="text"
              list="drawfemails"
              required
              minLength={5}
              maxLength={100}
              className="botonMultiple rounded-3 w-90 px-3 py-2 text-sm leading-none font-medium focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white dark:focus:border-white"
            />

            <datalist className="botonMultipleMultiple" id="drawfemails">
              <option value="gruñón@woodworkers.com">Gruñón</option>
              <option value="feliz@woodworkers.com">Feliz</option>
              <option value="dormilón@woodworkers.com">Dormilón</option>
              <option value="tímido@woodworkers.com">Tímido</option>
              <option value="estornudo@woodworkers.com">Estornudo</option>
              <option value="tontín@woodworkers.com">Tontín</option>
              <option value="doc@woodworkers.com">Doc</option>
            </datalist>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboBox;
