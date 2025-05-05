import { IRegisterUser } from '../../../models/user-model';

// Backend adatation for api
export interface IRegisterUserAdapter {
  email: string;
  password: string;
  confirm_password: string;
}

class RegisterAdapter {
  private registerData: IRegisterUser;

  constructor(registerData: IRegisterUser) {
    this.registerData = registerData;
  }

  getData(): IRegisterUserAdapter {
    return {
      email: this.registerData.email,
      password: this.registerData.password,
      confirm_password: this.registerData.confirmPassword,
    };
  }
}

export default RegisterAdapter;
