import { useLocation } from 'react-router-dom';

export const usePathname = () => {
  const location = useLocation();

  const getCurrentPage = () => {
    if (!location.pathname) return 'Unknown';
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment || 'Home';
  };

  return getCurrentPage();
};
