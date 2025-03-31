import { ISedebarItem } from '../Models/Sidebar.Model';
import { IoIosDocument, IoIosCloudUpload, IoIosArchive } from 'react-icons/io';

const IconSettings = 'group-hover:fill-white fill-black';

const MenuItems: ISedebarItem[] = [
  {
    title: 'Purchase Order Generator',
    url: '/dashboard',
    icon: <IoIosDocument className={IconSettings} />,
  },
  {
    title: 'Update ISBN',
    url: '/update',
    icon: <IoIosCloudUpload className={IconSettings} />,
  },
  {
    title: 'Files history',
    url: '/filesHistory',
    icon: <IoIosArchive className={IconSettings} />,
  },
];

export default MenuItems;
