import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlePage?.isLoading || false
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlePage?.error
export const getArticlesPageView = (state: StateSchema): ArticleView | undefined => state.articlePage?.view
