import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type Decorator } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/povaiders/StoreProvaider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { profileReducer } from 'entities/Profile'
import { articleDetailsCommentsReducer } from 'features/ArticleCommentList/model/slice/articleDetailsCommentsSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer
}

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (Story) => (
        <StoreProvider initialState={initialState } asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            {Story()}
        </StoreProvider>
)
