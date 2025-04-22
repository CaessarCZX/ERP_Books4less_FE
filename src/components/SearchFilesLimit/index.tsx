const options = [
  {
    key: 1112,
    value: 10,
    name: 10,
  },
  {
    key: 1113,
    value: 15,
    name: 15,
  },
  {
    key: 1114,
    value: 20,
    name: 20,
  },
];

const SearchLimit = () => {
  return (
    <div className="shadow-soft-xl flex w-fit rounded-2xl">
      <select
        className="rounded-l-2xl border border-r-0 border-gray-300 bg-white pl-2 font-light focus-visible:outline-none"
        id="file-types"
      >
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="rounded-r-2xl border border-gray-300 bg-white px-3 py-2 font-medium">
        view items
      </div>
    </div>
  );
};
export default SearchLimit;
