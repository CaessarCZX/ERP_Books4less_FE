import '../styles/Formulario.css';

const ComboBox = () => {
  return (
    <>
      <div className="flex  dark:bg-gray-800">
        <div className="bg-white d shadow-md rounded px-1 py-2">
          <div className="flex flex-col">
            <label
              htmlFor="text"
              className="text-base font-medium text-black dark:text-gray-300 mb-2"
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
              className="botonMultiple text-sm w-90 leading-none font-medium  rounded-3 px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-white dark:bg-gray-800 dark:text-white"
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
