import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from '@/app/povaiders/StoreProvaider'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types'

import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<Promise<void>, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const orderFromURL = searchParams.get('order') as SortOrder
      const sortFromURL = searchParams.get('sort') as ArticleSortField
      const searchFromURL = searchParams.get('search')
      const typeFromURL = searchParams.get('type') as ArticleType

      if (orderFromURL) dispatch(articlesPageActions.setOrder(orderFromURL))
      if (sortFromURL) dispatch(articlesPageActions.setSort(sortFromURL))
      if (searchFromURL) dispatch(articlesPageActions.setSearch(searchFromURL))
      if (typeFromURL) dispatch(articlesPageActions.setType(typeFromURL))

      dispatch(articlesPageActions.initialState())
      void dispatch(fetchArticlesList({}))
    }
  }
)
