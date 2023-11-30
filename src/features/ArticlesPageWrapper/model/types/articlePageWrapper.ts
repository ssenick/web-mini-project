import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlePageWrapperSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  view: ArticleView
}