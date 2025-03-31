import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISedebarItem } from '../Models/Sidebar.Model';

const SidebarItem: FC<ISedebarItem> = ({ url, icon, title }) => {
  return (
    <li className="mt-0.5 w-full">
      <Link
        className="group hover:shadow-soft-2xl mx-4 my-0 flex items-center rounded-lg px-4 py-3 text-sm font-normal whitespace-nowrap text-slate-700 transition-shadow hover:bg-white"
        to={url}
      >
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-md group-hover:bg-gradient-to-tl group-hover:from-purple-700 group-hover:to-pink-500 xl:p-2.5">
          {icon}
        </div>
        <span className="pointer-events-none ml-1 opacity-100 duration-300">
          {title}
        </span>
      </Link>
    </li>
  );
};
export default SidebarItem;
