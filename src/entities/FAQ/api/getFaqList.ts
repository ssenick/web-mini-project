import { rtkApi } from '@/shared/api/rtkApi';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { type Faq } from '../model/types/faq';

const getFaqList = rtkApi.injectEndpoints({
   endpoints: (build) => ({
      getFaqList: build.query<Faq[], string>({
         query(search) {
            addQueryParams({
               search,
            });
            return {
               url: '/faq',
               params: {
                  question_like: search,
               },
            };
         },
      }),
   }),
   overrideExisting: false,
});

export const { useGetFaqListQuery } = getFaqList;
