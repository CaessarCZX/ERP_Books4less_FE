import { PrivateRoutes, PrivateRoutesType } from '../../models/router-model';

export const getPrivateRoute = (route: keyof PrivateRoutesType) => {
  return `/${PrivateRoutes.SYSTEM}/${PrivateRoutes[route]}`;
};
