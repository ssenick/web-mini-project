import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { type Article } from 'entities/Article'

function checkData (data: Article[]): void {
  if (!data.length) {
    throw new Error('missing data')
  }
}

export const fetchArticlesList = createAsyncThunk<Article[], undefined, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
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
