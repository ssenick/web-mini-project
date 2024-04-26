import { rtkApi } from '@/shared/api/rtkApi';

import { type PostsI } from '../model/types/posts';

const postsPreviewList = rtkApi.injectEndpoints({
   endpoints: (build) => ({
      getPostsPreviewList: build.query<PostsI[], null>({
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
