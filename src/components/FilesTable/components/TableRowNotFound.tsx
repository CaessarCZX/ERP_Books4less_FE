import { AiOutlineFileUnknown } from 'react-icons/ai';

const TableRowNotFound = () => (
  <tr className="w-full">
    <td className="h-12 border border-transparent border-t-gray-200 text-gray-400">
      <div className="mt-3 flex flex-col items-center gap-1">
        <AiOutlineFileUnknown size={47} />
        <p className="font-bold">Not available data for user</p>
      </div>
    </td>
  </tr>
);
export default TableRowNotFound;
