const Tables = () => {
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs leading-5 font-semibold text-green-800">
                Active
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="focus:shadow-outline-blue rounded-md bg-black px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600">
                Edit
              </button>
              <button className="focus:shadow-outline-red ml-2 rounded-md bg-black px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap">User</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="inline-flex rounded-full bg-red-100 px-2 text-xs leading-5 font-semibold text-red-800">
                Inactive
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="focus:shadow-outline-blue rounded-md bg-black px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:outline-none active:bg-blue-600">
                Edit
              </button>
              <button className="focus:shadow-outline-red ml-2 rounded-md bg-black px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none active:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tables;
