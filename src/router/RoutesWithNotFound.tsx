import { FC, PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';

const RoutesWithNotFound: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path={PublicRoutes.NOTFOUND} element={<h2>NOT FOUND 404</h2>} />
    </Routes>
  );
};
export default RoutesWithNotFound;
