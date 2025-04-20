import { Outlet, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';
import { useUser } from '../hooks';

const AuthGuard = () => {
  const { id } = useUser();
  return id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
