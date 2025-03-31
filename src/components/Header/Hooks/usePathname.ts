import { useLocation } from 'react-router-dom';

export const usePathname = () => {
  const location = useLocation();

  const getCurrentPage = () => {
    if (!location.pathname) return 'Unknown';
    const currentPath = location.pathname.replace('/', '');
    return currentPath.charAt(0).toLocaleUpperCase() + currentPath.slice(1);
  };

  return getCurrentPage();
};
