import { FC } from 'react';
import { UploadFile } from '../models/table-model';
import { FaDownload } from 'react-icons/fa';
import getSizeOfFile from '../../../utils/Files/getSizeOfFile';
import { getIconByType } from '../utils/getIconByType';

const TableRow: FC<UploadFile> = ({ filename, type, actions, date, size }) => {
  const { normalIcon } = getIconByType(type);
  const rowDefaultStyle = 'px-3 py-2 md:px-6 md:py-4';
  const colorbadge =
    type === 'xlsx'
      ? 'bg-green-50 border-green-200 hover:bg-green-100'
      : type === 'pdf'
        ? 'bg-red-50 border-red-200 hover:bg-red-100'
        : 'bg-blue-50 border-blue-200 hover:bg-blue-100';
  return (
    <tr className="grid grid-cols-6 md:grid-cols-8">
      <td
        className={`${rowDefaultStyle} col-span-2 whitespace-nowrap md:col-span-3`}
      >
        <div className="flex items-center">
          {/* --- icon --- */}
          <picture className="h-5 w-5 flex-shrink-0 md:h-10 md:w-10">
            <img src={normalIcon} alt="File" className="cover" loading="lazy" />
          </picture>
          {/* --- icon --- */}

          <div className="ml-4 overflow-hidden">
            <div
              title={filename}
              className="truncate text-[10px] font-light text-gray-900 md:text-sm"
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
