import { FC, PropsWithChildren, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';

const NotFoundPage = lazy(() => import('../pages/NotFound'));

const RoutesWithNotFound: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path={PublicRoutes.NOTFOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
export default RoutesWithNotFound;
