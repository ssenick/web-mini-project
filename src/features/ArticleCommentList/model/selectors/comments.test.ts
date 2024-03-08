import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { getArticleCommentsError, getArticleCommentsIsLoading } from './comments';

describe('comments.test', () => {
   test('isLoading should return true', () => {
      const state: DeepPartial<StateSchema> = {
         articleDetailsComments: {
            ids: ['1'],
            entities: {
               1: {
                  id: '1',
                  text: 'Lorem',
                  createdComment: '20.20.2000',
                  user: { id: '1', username: 'Admin' },
               },
            },
            isLoading: true,
         },
      };
      expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
   });
   test('error should return error', () => {
      const state: DeepPartial<StateSchema> = {
         articleDetailsComments: {
            ids: ['1'],
            entities: {
               1: {
                  id: '1',
                  text: 'Lorem',
                  createdComment: '20.20.2000',
                  user: { id: '1', username: 'Admin' },
               },
            },
            error: 'error',
         },
      };
      expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
   });
});
