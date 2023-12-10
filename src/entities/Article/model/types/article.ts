import { type User } from 'entities/User'

export enum ArticleSortField {
  VIEWS = 'views',
  CREATED = 'createdAt',
  TITLE = 'title'
}

export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT'
}

interface ArticleBaseBlock {
  id: string
  type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}
export interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}
export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockType.CODE
  code: string
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  user: User
  type: ArticleType[]
  blocks: ArticleBlock[]
}
