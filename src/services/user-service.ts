import {
  IChangePassword,
  IChangePasswordResponse,
  IRegisterUser,
  IRegisterUserResponse,
  ISignIn,
  ISignInResponse,
} from '../models/user-model';
import projectApi from './api/service.config';

class UserService {
  static async signIn(loginData: ISignIn): Promise<ISignInResponse> {
    const { data } = await projectApi.post<ISignInResponse>(
      'api/login',
      loginData
    );
    return data;
  }

  static async signOut() {
    return await projectApi.post('api/logout', {});
  }

  static async signUp(
    registerData: IRegisterUser
  ): Promise<IRegisterUserResponse> {
    const { data } = await projectApi.post<IRegisterUserResponse>(
      '/api/register',
      registerData
    );
    return data;
  }

  static async changePassword(
    changePasswordData: IChangePassword
  ): Promise<IChangePasswordResponse> {
    const { data } = await projectApi.post<IChangePasswordResponse>(
      '/api/change-password',
      changePasswordData
    );
    return data;
  }
}

export default UserService;
