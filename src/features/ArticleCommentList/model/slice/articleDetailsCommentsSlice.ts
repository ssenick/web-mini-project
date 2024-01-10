import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { type Comment } from 'entities/Comment'

import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { type ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }

})

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
