import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type User } from '@/entities/User';

import { ArticleType } from '../consts/articleConsts';
import { createNewArticle } from '../services/createNewArticle/createNewArticle';
import { type Article, type ArticleBlock } from '../types/article';
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
   isLoading: false,
   error: undefined,
   forms: {
      id: '',
      title: '',
      subtitle: '',
      img: '',
      views: 0,
      createdAt: '',
      user: {
         id: '',
         username: '',
         avatar: '',
      },
      type: [ArticleType.IT],
      blocks: [],
   },
};

export const newArticleSlice = createSlice({
   name: 'newArticleSlice',
   initialState,
   reducers: {
      updateId: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.id = action.payload;
      },
      updateType: (state, action: PayloadAction<ArticleType[]>) => {
         if (state.forms) state.forms.type = action.payload;
      },
      updateCreatedAt: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.createdAt = action.payload;
      },
      updateUser: (state, action: PayloadAction<User>) => {
         if (state.forms)
            state.forms.user = {
               id: action.payload.id,
               username: action.payload.username,
               avatar: action.payload.avatar,
               roles: action.payload.roles,
               features: action.payload.features,
            };
      },
      updateUserId: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.userId = action.payload;
      },
      updateTitle: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.title = action.payload;
      },
      updateMainImage: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.img = action.payload;
      },
      updateSubTitle: (state, action: PayloadAction<string>) => {
         if (state.forms) state.forms.subtitle = action.payload;
      },
      addBlock: (state, action: PayloadAction<ArticleBlock[]>) => {
         if (state.forms?.blocks) {
            state.forms.blocks = action.payload;
         }
      },
      updateBlock: (state, action: PayloadAction<{ id: string; updatedBlock: ArticleBlock }>) => {
         if (state.forms?.blocks) {
            const { id, updatedBlock } = action.payload;
            const index = state.forms.blocks.findIndex((block) => block.id === id);
            if (index !== -1) {
               state.forms.blocks[index] = updatedBlock;
            }
         }
      },
      deleteBlock: (state, action: PayloadAction<string>) => {
         if (state.forms?.blocks) {
            state.forms.blocks = state.forms.blocks.filter((block) => block.id !== action.payload);
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(createNewArticle.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(createNewArticle.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.forms = action.payload;
         })
         .addCase(createNewArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});

export const { actions: newArticleActions } = newArticleSlice;
export const { reducer: newArticleReducer } = newArticleSlice;
