import { FC } from 'react';
import { IoIosArchive, IoIosCloudUpload, IoIosDocument } from 'react-icons/io';

const ENUM_STATUSES = {
  'order-generator': <IoIosDocument className="fill-black" />,
  'update-isbn': <IoIosCloudUpload className="fill-black" />,
  'files-history': <IoIosArchive className="fill-black" />,
};

interface Props {
  currentPage: string;
  iconSection?: 'order-generator' | 'update-isbn' | 'files-history';
}

const Breadcumb: FC<Props> = ({ currentPage, iconSection }) => {
  return (
    <nav>
      {/* <!-- breadcrumb --> */}
      <ol className="mr-12 flex flex-wrap rounded-lg bg-transparent pt-1 sm:mr-16">
        <li className="breadcrumb-item text-sm leading-normal">
          {iconSection && ENUM_STATUSES[iconSection]}
        </li>
        <li className="pl-2 text-sm leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
          <a className="text-slate-700 opacity-50 dark:text-white">Pages</a>
        </li>
        <li
          className="pl-2 text-sm leading-normal text-slate-700 capitalize before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
          aria-current="page"
        >
          {currentPage}
        </li>
      </ol>
      <h6 className="mb-0 font-bold capitalize dark:text-white">
        {currentPage}
      </h6>
    </nav>
  );
};
export default Breadcumb;
