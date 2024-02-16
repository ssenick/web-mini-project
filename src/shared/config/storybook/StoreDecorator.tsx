import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/povaiders/StoreProvaider'
import { articleDetailsReducer } from '@/entities/Article'
import { profileReducer } from '@/entities/Profile'
import { addNewCommentFormReducer } from '@/features/AddNewCommentForm'
import { articleDetailsCommentsReducer } from '@/features/ArticleCommentList'
import { articlesPageReducer } from '@/features/ArticlesPageWrapper'
import { loginReducer } from '@/features/AuthByUsername'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  addCommentForm: addNewCommentFormReducer,
  articlePage: articlesPageReducer
}

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (Story) => (
        <StoreProvider initialState={initialState } asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            {Story()}
        </StoreProvider>
)
