const TableFile = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold"> Files Listing</h1>

        {/* <!-- Search and Add User (Static) --> */}
        <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 w-full md:mb-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <a href="https://abhirajk.vercel.app/" target="blank">
            <button className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600">
              Add New User
            </button>
          </a>
        </div>

        {/* <!-- User Table --> */}
        <div className="overflow-x-auto rounded-lg bg-white shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-sm leading-normal text-gray-600 uppercase">
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Description</th>
                <th className="px-6 py-3 text-left">Data Release</th>
                <th className="px-6 py-3 text-left">Size</th>
                <th className="px-6 py-3 text-center">Adjuntos</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-6 py-3 text-left">PDF</td>
                <td className="px-6 py-3 text-left">Abhiraj k</td>
                <td className="px-6 py-3 text-left">12/02/2025</td>
                <td className="px-6 py-3 text-left">12mb</td>
                <td className="px-6 py-3 text-center">
                  <div className="item-center flex justify-center">
                    <button className="mr-2 w-4 transform hover:scale-110 hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button className="mr-2 w-4 transform hover:scale-110 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Static Pagination --> */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-700">
              Showing 1 to 5 of 5 entries
            </span>
          </div>
          <div className="flex space-x-2">
            <a href="https://abhirajk.vercel.app/" target="blank">
              <button className="rounded-md bg-gray-200 px-3 py-1 text-gray-700 opacity-50">
                Previous
              </button>
            </a>
            <a href="https://abhirajk.vercel.app/" target="blank">
              <button className="rounded-md bg-gray-200 px-3 py-1 text-gray-700 opacity-50">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableFile;
