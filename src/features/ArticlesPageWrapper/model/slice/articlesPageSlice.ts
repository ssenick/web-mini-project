import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/povaiders/StoreProvaider';
import {
   type Article,
   ArticleView,
   createNewArticle,
   deleteArticleById,
   updateArticleById,
} from '@/entities/Article';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { type SortOrder } from '@/shared/types';

import { type ArticlePageWrapperSchema } from '../../model/types/articlePageWrapper';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
   selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
   (state) => state.articlePage || articlesAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
   name: 'articlesPageSlice',
   initialState: articlesAdapter.getInitialState<ArticlePageWrapperSchema>({
      isLoading: false,
      error: '',
      ids: [],
      entities: {},
      view: ArticleView.SMALL,
      page: 1,
      hasMore: true,
      search: '',
      sort: ArticleSortField.CREATED,
      order: 'asc',
      type: ArticleType.ALL,
      _inited: false,
   }),
   reducers: {
      setView: (state, action: PayloadAction<ArticleView>) => {
         state.view = action.payload;
         localStorage.setItem(VIEW_LOCALSTORAGE_KEY, action.payload);
      },
      // initView: (state) => {
      //   state.view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView
      // },
      setPage: (state, action: PayloadAction<number>) => {
         state.page = action.payload;
      },
      setSearch: (state, action: PayloadAction<string>) => {
         state.search = action.payload;
      },
      setSort: (state, action: PayloadAction<ArticleSortField>) => {
         state.sort = action.payload;
      },
      setOrder: (state, action: PayloadAction<SortOrder>) => {
         state.order = action.payload;
      },
      setType: (state, action: PayloadAction<ArticleType>) => {
         state.type = action.payload;
      },
      initialState: (state) => {
         const view = localStorage.getItem(VIEW_LOCALSTORAGE_KEY) as ArticleView;
         state.view = view;
         state.limit = view === ArticleView.BIG ? 5 : 12;
         state._inited = true;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
               articlesAdapter.removeAll(state);
            }
         })

         .addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.meta.arg.replace) {
               articlesAdapter.setAll(state, action.payload);
            } else {
               articlesAdapter.addMany(state, action.payload);
            }
            if (state.limit) {
               state.hasMore = action.payload.length >= state.limit;
            }
         })
         .addCase(fetchArticlesList.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
         })
         .addCase(updateArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            const updatedArticle = action.payload;
            const existingArticle = state.entities[updatedArticle.id];
            if (existingArticle) {
               articlesAdapter.updateOne(state, { id: updatedArticle.id, changes: updatedArticle });
            }
         })
         .addCase(deleteArticleById.fulfilled, (state, action: PayloadAction<string>) => {
            const deletedArticleId = action.payload;
            articlesAdapter.removeOne(state, deletedArticleId);
         })

         .addCase(createNewArticle.fulfilled, (state, action: PayloadAction<Article>) => {
            articlesAdapter.addOne(state, action.payload);
         });
   },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
