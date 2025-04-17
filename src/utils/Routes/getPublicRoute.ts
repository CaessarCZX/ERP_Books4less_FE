import { PublicRoutes, PublicRoutesType } from '../../models/router-model';

export const getPublicRoute = (route: keyof PublicRoutesType) => {
  return `/${PublicRoutes[route]}`;
};
