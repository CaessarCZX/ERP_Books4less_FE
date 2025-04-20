import { FC } from 'react';
import Breadcumb from './components/Breadcumb';
import SidebarBtn from './components/SidebarBtn';
import { usePathname } from '../../hooks';
import LogoutBtn from './components/LogoutBtn';

interface Props {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const pageName = usePathname();

  return (
    <>
      <header
        className="sticky mt-6 flex flex-wrap items-center justify-between rounded-2xl px-0 py-2 shadow-none transition-all duration-250 lg:flex-nowrap lg:justify-start 2xl:mr-8"
        navbar-scroll="true"
      >
        <div className="flex-wrap-inherit mx-auto flex w-full items-center justify-between px-4 py-1">
          <Breadcumb iconSection="order-generator" currentPage={pageName} />
          <div
            className="mt-2 flex grow items-center justify-end md:mr-0 lg:basis-auto"
            id="navbar"
          >
            <ul className="mb-0 flex list-none flex-row pl-0">
              <li className="flex items-center">
                <LogoutBtn />
              </li>
              <li className="flex items-center pl-4 lg:hidden">
                <SidebarBtn
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
