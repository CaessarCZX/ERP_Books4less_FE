import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

const DefaultLayout: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col lg:ml-72.5">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="mx-auto max-w-screen-2xl pt-4 px-4 pb-4 md:px-6 2xl:px-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
