import { useSelector } from 'react-redux';
import { RootState } from '../context/store';
import { Outlet, Navigate } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';

const AuthGuard = () => {
  const userState = useSelector((store: RootState) => store.user);
  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
