import { FC } from 'react';
import SidebarItem from './components/SidebarItem';
import content from './content';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import { ISedebarItem } from './Models/Sidebar.Model';
import { useUser, usePathname } from '../../hooks';
import { getPrivateRoute } from '../../utils/Routes/getPrivateRoute';
import LogoApp from '../UI/Logo';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (signal: boolean) => void;
}

const Sidebar: FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const currentPath = usePathname();
  const { isAdmin } = useUser();
  const sidebarSections = getSections(content);

  function getSections(content: ISedebarItem[]) {
    if (isAdmin) return content;
    return content.filter((section) => section.permissions !== 'admin');
  }

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed inset-y-0 z-50 m-4 block w-full max-w-72.5 flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased transition-transform duration-200 lg:translate-x-0 lg:bg-transparent lg:shadow-none ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="">
          <Link
            className="mt-2 mb-4 ml-10 block w-fit"
            to={getPrivateRoute('GENERATE_PO')}
          >
            <LogoApp small variant="black" />
          </Link>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div className="block max-h-screen w-auto grow basis-full items-center overflow-auto">
          <ul className="mt-2 mb-10 flex flex-col gap-1 pl-0">
            {sidebarSections.map((item, index) => (
              <SidebarItem
                key={index}
                title={item.title}
                url={item.url}
                path={item.path}
                currentParam={currentPath}
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
