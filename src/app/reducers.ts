import { authApi } from 'api/auth/auth';
import { notificationsApi } from 'api/notifications/notifications';
import userReducer from 'slices/user/userSlice';

const rootReducer = {
  [authApi.reducerPath]: authApi.reducer,
  [notificationsApi.reducerPath]: notificationsApi.reducer,
  user: userReducer,
};

export default rootReducer;
