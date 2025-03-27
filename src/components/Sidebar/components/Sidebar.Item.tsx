import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISedebarItem } from '../Models/Sidebar.Model';

const AsideNavItem: FC<ISedebarItem> = ({ url, icon, title }) => {
  return (
    <li className="mt-0.5 w-full">
      <Link
        className="mx-4 my-0 flex items-center rounded-lg px-4 py-3 text-sm font-normal whitespace-nowrap text-slate-700"
        to={url}
      >
        <div className="group mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-md hover:bg-gradient-to-tl hover:from-purple-700 hover:to-pink-500 xl:p-2.5">
          {icon}
        </div>
        <span className="pointer-events-none ml-1 opacity-100 duration-300">
          {title}
        </span>
      </Link>
    </li>
  );
};
export default AsideNavItem;
