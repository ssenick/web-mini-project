import { rtkApi } from 'shared/api/rtkApi'

import { type Notification } from '../model/types/notification'

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query () {
        return {
          url: '/notifications'
        }
      }
    })
  }),
  overrideExisting: false
})

export const { useGetNotificationsQuery } = notificationApi
