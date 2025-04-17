export interface UserInfo {
  id: string;
  email: string;
  role: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse {
  message: string;
  user_id: string;
  email: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegisterUserResponse {
  message: string;
  user_id: string;
}

export interface IChangePassword {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IChangePasswordResponse {
  message: string;
}
