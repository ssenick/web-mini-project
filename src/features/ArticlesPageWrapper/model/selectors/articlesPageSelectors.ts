import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { ArticleView } from 'entities/Article'
import { ArticleSortField } from 'entities/Article/model/types/article'
import { type SortOrder } from 'shared/types'

export const getArticlesPageIsLoading = (state: StateSchema): boolean => state.articlePage?.isLoading || false
export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlePage?.error
export const getArticlesPageView = (state: StateSchema): ArticleView => state.articlePage?.view || ArticleView.SMALL
export const getArticlesPageNum = (state: StateSchema): number => state.articlePage?.page || 1
export const getArticlesPageLimit = (state: StateSchema): number => state.articlePage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema): boolean => state.articlePage?.hasMore ?? true
export const getArticlesPageOrder = (state: StateSchema): SortOrder => state.articlePage?.order ?? 'asc'
export const getArticlesPageSearch = (state: StateSchema): string => state.articlePage?.search ?? ''
export const getArticlesPageSort = (state: StateSchema): ArticleSortField => state.articlePage?.sort ?? ArticleSortField.CREATED
export const getArticlesPageInited = (state: StateSchema): boolean => state.articlePage?._inited ?? false
