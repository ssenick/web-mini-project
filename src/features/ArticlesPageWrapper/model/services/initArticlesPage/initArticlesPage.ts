import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/povaiders/StoreProvaider'
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from 'features/ArticlesPageWrapper/model/slice/articlesPageSlice'
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors'

export const initArticlesPage = createAsyncThunk<Promise<void>, undefined, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { dispatch, getState } = thunkAPI
    const inited = getArticlesPageInited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initialState())
      void dispatch(fetchArticlesList({
        page: 1
      }))
    }
  }
)
