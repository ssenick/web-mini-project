import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type Article } from 'entities/Article'
import { type ArticleDetailsRecommendationsListSchema } from 'features/ArticleRecommendationsList'
import {
  fetchArticleRecommendations
} from 'features/ArticleRecommendationsList/model/services/feachArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState()
)
const articleDetailsRecommendationsListSlice = createSlice({
  name: 'articleDetailsRecommendationsListSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsListSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }

})
export const { reducer: articleDetailsRecommendationsListReducer } = articleDetailsRecommendationsListSlice
