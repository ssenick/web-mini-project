// import { createAsyncThunk } from '@reduxjs/toolkit';
//
// import { type ThunkConfig } from '@/app/povaiders/StoreProvaider';
// import { Article, getArticleDetailsData } from '@/entities/Article';
// import { type Comment } from '@/entities/Comment';
// import { getUserAuthData } from '@/entities/User';
// import { fetchCommentsByArticleId } from '@/features/ArticleCommentList';
// import { getDate } from '@/shared/lib/func/getDate';
//
// function checkData(data: Comment): void {
//    if (!data) {
//       throw new Error('missing data');
//    }
// }
//
// export const createNewArticle = createAsyncThunk<Article, undefined, ThunkConfig<string>>(
//    'articleDetails/createNewArticle',
//    async (_, thunkAPI) => {
//       const { extra, rejectWithValue, getState } = thunkAPI;
//       try {
//          const { data } = await extra.api.post<Article>('/articles', {});
//
//          checkData(data);
//
//          // передаем id статьи, что бы перерисовать комментарии
//          void dispatch(fetchCommentsByArticleId(article?.id));
//
//          return data;
//       } catch (e) {
//          console.log(e);
//          return rejectWithValue('error');
//       }
//    },
// );
export function gaz() {
   console.log(1);
}
