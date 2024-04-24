import { rtkApi } from '@/shared/api/rtkApi';

const postsPreviewList = rtkApi.injectEndpoints({
   endpoints: (build) => ({
      getPostsPreviewList: build.query({
         query() {
            return {
               url: '/posts',
            };
         },
      }),
   }),
   overrideExisting: false,
});

export const { useGetPostsPreviewListQuery } = postsPreviewList;
