import { ISignInResponse, UserInfo } from '../models/user-model';

class UserAdapter {
  constructor() {}

  getUserInfoFromBackEndResponse(data: ISignInResponse): UserInfo {
    return {
      id: data.user_id,
      email: data.email,
      role: '',
    };
  }
}

export default UserAdapter;
