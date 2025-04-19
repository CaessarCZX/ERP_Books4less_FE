import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/user-model';

export const EmptyUserState: UserInfo = {
  id: '',
  email: '',
  isAdmin: false,
};

const initialState: UserInfo | undefined = EmptyUserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (_, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
