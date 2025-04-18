import { useMutation } from '@tanstack/react-query';
import useDisplayNotifications from '../../../hooks/useDisplayNotifications';
import { AxiosError } from 'axios';
import UserService from '../../../services/user-service';
import { ISignIn } from '../../../models/user-model';
import { useDispatch } from 'react-redux';
import UserActions from '../../../context/actions/user-actions';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models/router-model';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setError } = useDisplayNotifications();
  const mutation = useMutation({
    mutationFn: UserService.signIn,
  });

  const login = async (data: ISignIn) => {
    try {
      const res = await mutation.mutateAsync(data);
      new UserActions(dispatch).createUser(res);
      navigate(`/${PrivateRoutes.SYSTEM}`);
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        setError(
          e.response?.data?.error ||
            e.message ||
            'An error occurred while generating the purchase order.'
        );
      } else if (e instanceof Error) {
        setError(e.message || 'An unknown error occurred.');
      } else {
        setError('An unexpected error occurred.');
      }
      return null;
    }
  };

  return {
    mutation,
    login,
  };
};
