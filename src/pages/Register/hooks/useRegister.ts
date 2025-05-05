import { useMutation } from '@tanstack/react-query';
import { useDisplayNotifications } from '../../../hooks';
import { AxiosError } from 'axios';
import UserService from '../../../services/user-service';
import { IRegisterUser } from '../../../models/user-model';
import { useNavigate } from 'react-router-dom';
import RegisterAdapter from '../adapters/register-adapter';

export const useRegister = () => {
  const navigate = useNavigate();
  const { setError, setSuccess } = useDisplayNotifications();
  const mutation = useMutation({
    mutationFn: UserService.signUp,
  });

  const register = async (data: IRegisterUser) => {
    try {
      const registerData = new RegisterAdapter(data).getData();
      const res = await mutation.mutateAsync(registerData);
      setSuccess(res.message);
      navigate('/system/successNewUser');
      return res;
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
    register,
  };
};
