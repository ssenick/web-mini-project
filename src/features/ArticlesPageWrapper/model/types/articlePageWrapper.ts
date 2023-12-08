import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'
import { type ArticleSortField } from 'entities/Article/model/types/article'
import { type SortOrder } from 'shared/types'

export interface ArticlePageWrapperSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string

  _inited: boolean
}
