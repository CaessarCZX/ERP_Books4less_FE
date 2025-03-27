import { FC } from 'react';
import SidebarItem from './components/Sidebar.Item';
import content from './content';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { FaChevronLeft } from 'react-icons/fa';

// xl:left-0 xl:translate-x-0 -> for display xl:bg-transparent -translate-x-full -> hidden

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (signal: boolean) => void;
}

const Sidebar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`inset-y-0 block h-full w-full max-w-62.5 flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="h-19.5">
          <Link
            className="m-0 block px-8 py-6 text-sm whitespace-nowrap text-slate-700"
            to="/"
            target="_blank"
          >
            <span className="ease-nav-brand ml-1 font-semibold transition-all duration-200">
              Document Maganer
            </span>
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <FaChevronLeft className="h-8 w-8 text-black" />
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        {/* <hr className="mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" /> */}

        <div className="block max-h-screen w-auto grow basis-full items-center overflow-auto">
          <ul className="mb-0 flex flex-col gap-1 pl-0">
            {content.map((item, index) => (
              <SidebarItem
                key={index}
                title={item.title}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
