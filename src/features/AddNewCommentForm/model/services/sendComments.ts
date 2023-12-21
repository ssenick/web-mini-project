import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'

import { type Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getAddNewCommentFormText } from '../selectors/addNewCommentFormSelectors'
import { addNewCommentFormActions } from '../slice/addNewCommentFormSlice'
import { getDate } from 'shared/lib/func/getDate'

function checkData (data: Comment): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const sendComment = createAsyncThunk<
Comment,
undefined,
ThunkConfig<string>
>(
  'addNewCommentForm/sendComment',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const userData = getUserAuthData(getState())
    const text = getAddNewCommentFormText(getState())
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
      dispatch(addNewCommentFormActions.setText(''))
      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
