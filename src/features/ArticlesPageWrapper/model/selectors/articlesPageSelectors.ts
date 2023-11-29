import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlePage?.isLoading || false
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlePage?.error
export const getArticlesPageView = (state: StateSchema): ArticleView => state.articlePage?.view || ArticleView.SMALL
