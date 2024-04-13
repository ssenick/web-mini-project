import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';
import { getUserAuthData } from '@/entities/User';

import { getNewArticleData } from '../../selectors/newArticle';
import { type Article } from '../../types/article';

function checkData(data: Article): void {
   if (!data) {
      throw new Error('missing data');
   }
}

export const createNewArticle = createAsyncThunk<Article, undefined, ThunkConfig<string>>(
   'articleNew',
   async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;
      const newArticleData = getNewArticleData(getState());
      const userData = getUserAuthData(getState());

      if (!newArticleData || !userData) rejectWithValue('no data');

      try {
         const { data } = await extra.api.post<Article>('/articles', newArticleData);

         checkData(data);
         return data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
