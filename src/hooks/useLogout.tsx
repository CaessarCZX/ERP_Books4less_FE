import { useDispatch } from 'react-redux';
import UserActions from '../context/actions/user-actions';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../models/router-model';
import UserService from '../services/user-service';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    new UserActions(dispatch).resetUser();
    UserService.signOut();
    navigate(`/${PublicRoutes.LOGIN}`);
  };

  return logout;
};
