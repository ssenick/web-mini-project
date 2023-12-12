import { type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddNewCommentFormSchema } from 'features/AddNewCommentForm'
import { type ArticleDetailsCommentSchema } from 'features/ArticleCommentList'
import { type ArticleDetailsRecommendationsListSchema } from 'features/ArticleRecommendationsList'
import { type ArticlePageWrapperSchema } from 'features/ArticlesPageWrapper'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ScrollSaveSchema } from 'features/ScrollSave'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollSave: ScrollSaveSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  articleDetailsRecommendations?: ArticleDetailsRecommendationsListSchema
  addCommentForm?: AddNewCommentFormSchema
  articlePage?: ArticlePageWrapperSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: Reducer<CombinedState<StateSchema>>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}
export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
