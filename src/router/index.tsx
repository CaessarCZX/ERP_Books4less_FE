import { lazy } from 'react';
import { PrivateRoutes, PublicRoutes } from '../models/router-model';
import { Navigate, Route } from 'react-router-dom';
import RoutesWithNotFound from './RoutesWithNotFound';
import AuthGuard from '../auth/auth.guard';
import { Layout } from '../layouts/PageLayout';

const Login = lazy(() => import('../pages/Login/Login'));
const SystemRouter = lazy(() => import('./SystemRouter'));

const RouterApp = () => (
  <RoutesWithNotFound>
    <Route element={<Layout />}>
      <Route index element={<Navigate to={PrivateRoutes.SYSTEM} />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route element={<AuthGuard />}>
        <Route path={`${PrivateRoutes.SYSTEM}/*`} element={<SystemRouter />} />
      </Route>
    </Route>
  </RoutesWithNotFound>
);

export default RouterApp;
