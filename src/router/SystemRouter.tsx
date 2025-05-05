import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../models/router-model';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import RoutesWithNotFound from './RoutesWithNotFound';
import AdminGuard from '../auth/auth.admin.guard';

const GeneratorPO = lazy(() => import('../pages/GeneratePO/Generator'));
const FilesHistory = lazy(() => import('../pages/FilesHistory/FilesHistory'));
const UpdateBooks = lazy(() => import('../pages/UpdateISBN'));
const Register = lazy(() => import('../pages/Register/Register'));
const RegistrationSuccessPage = lazy(
  () => import('../pages/RegistrationSuccess')
);

const SystemRouter = () => {
  return (
    <RoutesWithNotFound>
      {/* Common user access */}
      <Route element={<DefaultLayout />}>
        <Route index element={<Navigate to={PrivateRoutes.GENERATE_PO} />} />
        <Route path={PrivateRoutes.GENERATE_PO} element={<GeneratorPO />} />
        <Route path={PrivateRoutes.FILES_HISTORY} element={<FilesHistory />} />
      </Route>
      {/* Common user access */}

      {/* Only Admin page access */}
      <Route element={<AdminGuard />}>
        <Route element={<DefaultLayout />}>
          <Route path={PrivateRoutes.UPDATE_BOOKS} element={<UpdateBooks />} />
        </Route>
        <Route path={PrivateRoutes.REGISTER} element={<Register />} />
        <Route
          path={PrivateRoutes.NEW_USER}
          element={<RegistrationSuccessPage />}
        />
        {/* Only Admin page access */}
      </Route>
    </RoutesWithNotFound>
  );
};
export default SystemRouter;
