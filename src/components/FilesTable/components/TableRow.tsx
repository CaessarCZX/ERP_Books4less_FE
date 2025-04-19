import { FC } from 'react';
import { UploadFile } from '../models/table-model';
import { FaFileDownload, FaDownload } from 'react-icons/fa';
import getSizeOfFile from '../../../utils/Files/getSizeOfFile';

const TableRow: FC<UploadFile> = ({ filename, type, actions, date, size }) => {
  const rowDefaultStyle = 'px-3 py-2 md:px-6 md:py-4';
  const colorbadge =
    type === 'xlsx'
      ? 'bg-green-50 border-green-200 hover:bg-green-100'
      : type === 'pdf'
        ? 'bg-red-50 border-red-200 hover:bg-red-100'
        : 'bg-orange-50 border-orange-200 hover:bg-orange-100';
  return (
    <tr className="grid grid-cols-6 md:grid-cols-8">
      <td
        className={`${rowDefaultStyle} col-span-2 whitespace-nowrap md:col-span-3`}
      >
        <div className="flex items-center">
          {/* --- icon --- */}
          <div className="h-5 w-5 flex-shrink-0 rounded-xl bg-gradient-to-tl from-blue-700 to-blue-500 md:h-10 md:w-10">
            <FaFileDownload className="h-4 w-4 text-white md:h-9 md:w-9" />
          </div>
          {/* --- icon --- */}
          {/* max-w-12 md:max-w-20 xl:max-w-full */}

          <div className="ml-4 overflow-hidden">
            <div
              title={filename}
              className="truncate text-[10px] font-medium text-gray-900 md:text-sm"
            >
              {filename}
            </div>
            <div className="text-[10px] text-gray-500 lg:text-sm">{type}</div>
          </div>
        </div>
      </td>
      <td className={`${rowDefaultStyle} whitespace-nowrap`}>
        <div className="text-[10px] text-gray-900 md:text-sm">{type}</div>
      </td>
      <td className={`${rowDefaultStyle} whitespace-nowrap`}>
        <span
          className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold`}
        >
          <a href={actions} target="_blank">
            <div
              className={`hidden rounded-2xl border px-2 text-gray-700 hover:scale-105 lg:inline-block ${colorbadge}`}
            >
              Download
            </div>
            <FaDownload className="text-blue-700 lg:hidden" />
          </a>
        </span>
      </td>
      <td className={`${rowDefaultStyle} whitespace-nowrap`}>
        <div className="text-[10px] text-gray-900 md:text-sm">
          {new Date(date).toLocaleDateString()}
        </div>
      </td>
      <td className={`${rowDefaultStyle} whitespace-nowrap`}>
        <div className="text-[10px] text-gray-900 md:text-sm">
          {new Date(date).toLocaleTimeString()}
        </div>
      </td>
      <td
        className={`${rowDefaultStyle} hidden text-right text-sm font-medium whitespace-nowrap md:block`}
      >
        <p className="m-0 text-[10px] text-indigo-600 hover:text-indigo-900 md:text-sm">
          {getSizeOfFile(parseFloat(size))}
        </p>
      </td>
    </tr>
  );
};
export default TableRow;
