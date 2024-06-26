import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';

import {
   getArticlesPageHasMore,
   getArticlesPageIsLoading,
   getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<Promise<void>, undefined, ThunkConfig<string>>(
   'articlesPage/fetchNextArticlesPage',
   async (_, thunkAPI) => {
      const { dispatch, getState } = thunkAPI;
      const page = getArticlesPageNum(getState());
      const hasMore = getArticlesPageHasMore(getState());
      const isLoading = getArticlesPageIsLoading(getState());

      if (hasMore && !isLoading) {
         dispatch(articlesPageActions.setPage(page + 1));
         void dispatch(fetchArticlesList({}));
      }
   },
);
