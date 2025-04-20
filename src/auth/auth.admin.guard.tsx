import { Outlet, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';
import { useUser } from '../hooks';

const AdminGuard = () => {
  const { isAdmin } = useUser();
  return isAdmin ? <Outlet /> : <Navigate replace to={PublicRoutes.INDEX} />;
};

export default AdminGuard;
