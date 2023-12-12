import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { type Article } from 'entities/Article'

function checkData (data: Article[]): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const fetchArticleRecommendations = createAsyncThunk<
Article[],
undefined,
ThunkConfig<string>
>(
  'articleDetails/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 12
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
