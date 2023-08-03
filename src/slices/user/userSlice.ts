import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponseType } from 'api/auth/auth.interface';

import { RootState } from 'app/store';
import { UserState } from './user.interface';

export const userSlice = createSlice({
  initialState: {} as UserState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<AuthResponseType>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectIsAuthenticated = (state: RootState) => !!state.user.user;

export default userSlice.reducer;
