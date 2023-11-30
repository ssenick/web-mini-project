import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors'
interface fetchArticlesListProps {
  page?: number
}
function checkData (data: Article[]): void {
  if (!data.length) {
    throw new Error('missing data')
  }
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const { page = 1 } = props
    const limit = getArticlesPageLimit(getState())

    try {
      const { data } = await extra.api.get<Article[]>('/articles', {
        // headers: {
        //   // это для косяк, хз как решить, без этого кода, api.ts не работает без перезагрузки страницы
        //   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
        // },
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
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
