import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
jest.mock('../fetchArticlesList/fetchArticlesList.ts');

describe('fetchNextArticlesPage test', () => {
   test('success', async () => {
      const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
         articlePage: {
            page: 1,
            ids: [],
            entities: {},
            limit: 5,
            isLoading: false,
            hasMore: true,
         },
      });
      await thunk.callThunk(undefined);

      expect(thunk.dispatch).toBeCalledTimes(4);
      expect(fetchArticlesList).toBeCalledTimes(1);
   });
});
