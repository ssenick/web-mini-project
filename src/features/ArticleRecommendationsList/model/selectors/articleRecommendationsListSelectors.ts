import { type StateSchema } from 'app/povaiders/StoreProvaider'

export const getArticleRecommendationsListIsLoading = (state: StateSchema): boolean =>
  state.articleDetailsRecommendations?.isLoading || false
export const getArticleRecommendationsListError = (state: StateSchema): string =>
  state.articleDetailsRecommendations?.error || ''
