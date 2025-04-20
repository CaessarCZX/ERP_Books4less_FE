import { PrivateRoutes } from '../../../models/router-model';
import { getPrivateRoute } from '../../../utils/Routes/getPrivateRoute';
import { ISedebarItem } from '../Models/Sidebar.Model';
import { IoIosDocument, IoIosCloudUpload, IoIosArchive } from 'react-icons/io';

const MenuItems: ISedebarItem[] = [
  {
    title: 'Purchase Order Generator',
    url: getPrivateRoute('GENERATE_PO'),
    icon: IoIosDocument,
    path: PrivateRoutes.GENERATE_PO,
    permissions: 'user',
  },
  {
    title: 'Update ISBN',
    url: getPrivateRoute('UPDATE_BOOKS'),
    icon: IoIosCloudUpload,
    path: PrivateRoutes.UPDATE_BOOKS,
    permissions: 'admin',
  },
  {
    title: 'Files history',
    url: getPrivateRoute('FILES_HISTORY'),
    icon: IoIosArchive,
    path: PrivateRoutes.FILES_HISTORY,
    permissions: 'user',
  },
];

export default MenuItems;
