import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { type ArticleSortField } from 'entities/Article'
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice'
import { type SortOrder } from 'shared/types'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'

export const initArticlesPage = createAsyncThunk<Promise<void>, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      const orderFromURL = searchParams.get('order') as SortOrder
      const sortFromURL = searchParams.get('sort') as ArticleSortField
      const searchFromURL = searchParams.get('search')

      if (orderFromURL) dispatch(articlesPageActions.setOrder(orderFromURL))
      if (sortFromURL) dispatch(articlesPageActions.setSort(sortFromURL))
      if (searchFromURL) dispatch(articlesPageActions.setSearch(searchFromURL))

      dispatch(articlesPageActions.initialState())
      void dispatch(fetchArticlesList({}))
    }
  }
)
