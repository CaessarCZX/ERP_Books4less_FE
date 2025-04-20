import { FC } from 'react';

interface Props {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg: boolean) => void;
}

const SidebarBtn: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <button
      onClick={() => {
        setSidebarOpen(!sidebarOpen);
      }}
      className="block cursor-pointer p-0 text-sm text-slate-500 transition-all dark:text-white"
      aria-expanded="false"
    >
      <span className="relative block h-6 w-6 cursor-pointer">
        <span className="du-block absolute right-0 h-full w-full">
          <span
            className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
              !sidebarOpen && '!w-full delay-300'
            }`}
          ></span>
          <span
            className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
              !sidebarOpen && '!w-full delay-400'
            }`}
          ></span>
          <span
            className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
              !sidebarOpen && '!w-full delay-500'
            }`}
          ></span>
        </span>
        <span className="absolute right-0 h-full w-full rotate-45">
          <span
            className={`absolute top-0 left-2.5 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
              !sidebarOpen && '!h-0 !delay-[0]'
            }`}
          ></span>
          <span
            className={`absolute top-2.5 left-0 block h-0.5 w-full rounded-sm bg-black delay-400 duration-200 ease-in-out dark:bg-white ${
              !sidebarOpen && '!h-0 !delay-200'
            }`}
          ></span>
        </span>
      </span>
    </button>
  );
};
export default SidebarBtn;
