import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'helpers/baseQuery';

import { NotificationsResponseType } from './notifications.interface';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: baseQuery('/'),
  endpoints: (builder) => ({
    notifications: builder.mutation<NotificationsResponseType[], void>({
      query: () => ({
        url: '/notifications',
        method: 'GET',
      }),
    }),
  }),
});

export const { useNotificationsMutation } = notificationsApi;
