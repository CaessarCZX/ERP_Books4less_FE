import { useSelector } from 'react-redux';
import { RootState } from '../context/store';

export const useUser = () => {
  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);
  const id = useSelector((state: RootState) => state.user.id);

  return {
    isAdmin,
    id,
  };
};
