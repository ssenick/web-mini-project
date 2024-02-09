import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'

import { type StateSchema, StoreProvider } from '@/app/povaiders/StoreProvaider'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from '@/entities/Profile'
import { addNewCommentFormReducer } from '@/features/AddNewCommentForm/model/slice/addNewCommentFormSlice'
import { articleDetailsCommentsReducer } from '@/features/ArticleCommentList/model/slice/articleDetailsCommentsSlice'
import { articlesPageReducer } from '@/features/ArticlesPageWrapper/model/slice/articlesPageSlice'
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'

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
