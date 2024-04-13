import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type Article } from '../types/article';

export const getNewArticleData = (state: StateSchema): Article | undefined => state.newArticle?.forms;
export const getNewArticleIsLoading = (state: StateSchema): boolean => state.newArticle?.isLoading || false;
export const getNewArticleError = (state: StateSchema): string | undefined => state.newArticle?.error;
