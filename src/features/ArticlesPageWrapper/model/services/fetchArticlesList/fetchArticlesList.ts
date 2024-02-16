import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider'
import { type Article } from '@/entities/Article'
import { ArticleType } from '@/entities/Article'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'

import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors'

interface fetchArticlesListProps {
  replace?: boolean
}

function checkData (data: Article[]): void {
  if (!data) {
    throw new Error('missing data')
  }
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI
    const limit = getArticlesPageLimit(getState())
    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const type = getArticlesPageType(getState())
    const page = getArticlesPageNum(getState())

    try {
      addQueryParams({
        sort, order, search, type
      })
      const { data } = await extra.api.get<Article[]>('/articles', {
        // headers: {
        //   // это для косяк, хз как решить, без этого кода, api.ts не работает без перезагрузки страницы
        //   authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
        // },
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          title_like: search,
          type_like: type === ArticleType.ALL ? undefined : type
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
