import { FC } from 'react';
import { usePageTitle } from './hooks/usePageTitle';
import { Outlet, useLocation } from 'react-router-dom';
import GetTitleRoutes from './models';

export const Layout: FC = () => {
  const location = useLocation();
  const routeTitles = GetTitleRoutes();
  const title = routeTitles[location.pathname] || 'Página no encontrada';

  // Actualiza el título solo cuando cambia la ruta
  usePageTitle(title);

  return <Outlet />;
};
