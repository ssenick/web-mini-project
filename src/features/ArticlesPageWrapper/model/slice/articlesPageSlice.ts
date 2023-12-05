import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlePageWrapperSchema } from 'features/ArticlesPageWrapper'
import { fetchArticlesList } from 'features/ArticlesPageWrapper/model/services/fetchArticlesList/fetchArticlesList'
import { VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlePage || articlesAdapter.getInitialState()
)

export const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageWrapperSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload)
    },
    // initView: (state) => {
    //   state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
    // },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initialState: (state) => {
      const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.SMALL ? 10 : 4
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        articlesAdapter.addMany(state, action.payload)
        if (state.limit) {
          state.hasMore = action.payload.length >= state.limit
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
  }
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
