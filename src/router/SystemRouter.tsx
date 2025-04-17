import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../models/router-model';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import RoutesWithNotFound from './RoutesWithNotFound';

const GeneratorPO = lazy(() => import('../pages/GeneratePO/Generator'));
const FilesHistory = lazy(() => import('../pages/FilesHistory/FilesHistory'));
const UpdateBooks = lazy(() => import('../pages/UpdateISBN'));

const SystemRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route element={<DefaultLayout />}>
        <Route index element={<Navigate to={PrivateRoutes.GENERATE_PO} />} />
        <Route path={PrivateRoutes.GENERATE_PO} element={<GeneratorPO />} />
        <Route path={PrivateRoutes.FILES_HISTORY} element={<FilesHistory />} />
        <Route path={PrivateRoutes.UPDATE_BOOKS} element={<UpdateBooks />} />
      </Route>
    </RoutesWithNotFound>
  );
};
export default SystemRouter;
