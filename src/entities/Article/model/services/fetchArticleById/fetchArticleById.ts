import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';

import { type Article } from '../../types/article';

function checkData(data: Article): void {
   if (!data) {
      throw new Error('missing data');
   }
}
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
   'articleDetails/fetchArticleById',
   async (articleId, thunkAPI) => {
      const { extra, rejectWithValue } = thunkAPI;
      try {
         const { data } = await extra.api.get<Article>(`/articles/${articleId}`, {
            params: {
               _expand: 'user',
            },
         });
         checkData(data);
         return data;
      } catch (e) {
         console.log(e);
         return rejectWithValue('error');
      }
   },
);
