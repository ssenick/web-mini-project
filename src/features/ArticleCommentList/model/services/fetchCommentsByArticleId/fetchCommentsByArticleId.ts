import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'

import { type Comment } from 'entities/Comment'

function checkData (data: Comment[]): void {
  if (!data.length) {
    throw new Error('missing data')
  }
}

export const fetchCommentsByArticleId = createAsyncThunk<
Comment[],
string | undefined,
ThunkConfig<string>
>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const { data } = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      })

      checkData(data)

      return data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
