import { rtkApi } from '@/shared/api/rtkApi';

import { type Topic } from '../model/types/topics';

const topicsApi = rtkApi.injectEndpoints({
   endpoints: (build) => ({
      getTopicsList: build.query<Topic[], null>({
         query() {
            return {
               url: '/topics',
            };
         },
      }),
   }),
   overrideExisting: false,
});

export const { useGetTopicsListQuery } = topicsApi;
