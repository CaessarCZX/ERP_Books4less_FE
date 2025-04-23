import { PrivateRoutes } from '../../../models/router-model';
import { getPrivateRoute } from '../../../utils/Routes/getPrivateRoute';
import { ISedebarItem } from '../Models/Sidebar.Model';
import { IoIosDocument, IoIosCloudUpload, IoIosArchive } from 'react-icons/io';

// Las claves de title se usan como claves de traducción
const MenuItems: ISedebarItem[] = [
  {
    title: 'sideBar.purchaseOrderGenerate', // clave en JSON de i18n
    url: getPrivateRoute('GENERATE_PO'),
    icon: IoIosDocument,
    path: PrivateRoutes.GENERATE_PO,
    permissions: 'user',
  },
  {
    title: 'sideBar.updateISBN',
    url: getPrivateRoute('UPDATE_BOOKS'),
    icon: IoIosCloudUpload,
    path: PrivateRoutes.UPDATE_BOOKS,
    permissions: 'admin',
  },
  {
    title: 'sideBar.filesHistory',
    url: getPrivateRoute('FILES_HISTORY'),
    icon: IoIosArchive,
    path: PrivateRoutes.FILES_HISTORY,
    permissions: 'user',
  },
];

export default MenuItems;
