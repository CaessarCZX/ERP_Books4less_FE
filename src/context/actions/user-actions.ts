import { Dispatch } from '@reduxjs/toolkit';
import { createUser, updateUser, resetUser } from '../states/user';
import { ISignInResponse, UserInfo } from '../../models/user-model';
import UserAdapter from '../../adapters/user-adapter';

class UserActions {
  private dispatch: Dispatch;
  private adapter: UserAdapter;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
    this.adapter = new UserAdapter();
  }

  createUser(data: ISignInResponse) {
    const user = this.adapter.getUserInfoFromBackEndResponse(data);
    this.dispatch(createUser(user));
  }

  updateUser(updateData: Partial<UserInfo>) {
    this.dispatch(updateUser(updateData));
  }

  resetUser() {
    this.dispatch(resetUser());
  }
}

export default UserActions;
