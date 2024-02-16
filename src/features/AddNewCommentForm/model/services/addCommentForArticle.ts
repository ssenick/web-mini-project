import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider'
import { getArticleDetailsData } from '@/entities/Article'
import { type Comment } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import {
  fetchCommentsByArticleId
} from '@/features/ArticleCommentList'
import { getDate } from '@/shared/lib/func/getDate'

function checkData (data: Comment): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const addCommentForArticle = createAsyncThunk<
Comment,
string,
ThunkConfig<string>
>(
  'addNewCommentForm/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) rejectWithValue('no data')

    try {
      const { data } = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData?.id,
        text,
        createdComment: getDate()
      })

      checkData(data)

      // передаем id статьи, что бы перерисовать комментарии
      void dispatch(fetchCommentsByArticleId(article?.id))

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
