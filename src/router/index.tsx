import { lazy } from 'react';
import { PrivateRoutes, PublicRoutes } from '../models/router-model';
import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from './RoutesWithNotFound';
import AuthGuard from '../auth/auth.guard';
import { Layout } from '../layouts/PageLayout';
import RegistrationSuccessPage from '../pages/RegistrationSuccess';

const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const SystemRouter = lazy(() => import('./SystemRouter'));

const RouterApp = () => (
  <RoutesWithNotFound>
    <Route element={<Layout />}>
      <Route index element={<Navigate to={PrivateRoutes.SYSTEM} />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route path={PublicRoutes.REGISTER} element={<Register />} />
      <Route
        path={PublicRoutes.NEW_USER}
        element={<RegistrationSuccessPage />}
      />
      <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.SYSTEM}/*`} element={<SystemRouter />} />
      </Route>
    </Route>
  </RoutesWithNotFound>
);

export default RouterApp;
