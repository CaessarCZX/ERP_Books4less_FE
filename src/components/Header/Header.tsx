import { FC } from 'react';
import Breadcumb from './components/Breadcumb';

interface Props {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const Header: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  console.log(sidebarOpen, setSidebarOpen);
  return (
    <>
      <header
        className="relative mt-6 flex w-full flex-wrap items-center justify-between rounded-2xl px-0 py-2 shadow-none transition-all duration-250 lg:flex-nowrap lg:justify-start"
        navbar-scroll="true"
      >
        <div className="flex-wrap-inherit mx-auto flex w-full items-center justify-between px-4 py-1">
          <Breadcumb iconSection="order-generator" currentPage="Dashboard" />

          <div className="flex items-center">
            <div
              className="ease-nav-brand block p-0 text-sm text-slate-500 transition-all xl:hidden"
              aria-expanded="false"
            >
              <div className="w-4.5 overflow-hidden">
                <i className="ease-soft relative mb-0.75 block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                <i className="ease-soft relative mb-0.75 block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
                <i className="ease-soft relative block h-0.5 translate-x-[5px] rounded-sm bg-slate-500 transition-all dark:bg-white"></i>
              </div>
            </div>
          </div>

          <div
            className="mt-2 flex grow items-center sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
            id="navbar"
          >
            <div className="flex items-center md:ml-auto md:pr-4">
              <div className="ease-soft relative flex w-full flex-wrap items-stretch rounded-lg transition-all">
                <span className="ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent px-2.5 py-2 text-center text-sm font-normal whitespace-nowrap text-slate-500 transition-all">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="focus:shadow-soft-primary-outline ease-soft leading-5.6 relative -ml-px block w-1/100 min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 pl-9 text-sm text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:transition-shadow focus:outline-none dark:bg-gray-950 dark:text-white/80 dark:placeholder:text-white/80"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <ul className="md-max:w-full mb-0 flex list-none flex-row justify-end pl-0">
              <li className="flex items-center">
                <a
                  href="./pages/authentication/signin/illustration.html"
                  className="ease-nav-brand block px-0 py-2 text-sm font-semibold text-slate-500 transition-all dark:text-white"
                >
                  <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                  <span className="hidden sm:inline">Sign In</span>
                </a>
              </li>
              {/* Barras para desplegar el menu */}
              <li className="flex items-center pl-4 xl:hidden">
                <a
                  sidenav-trigger=""
                  className="ease-nav-brand block p-0 text-sm text-slate-500 transition-all dark:text-white"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <div className="w-4.5 overflow-hidden">
                    <i className="ease-soft relative mb-0.75 block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                    <i className="ease-soft relative mb-0.75 block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                    <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
