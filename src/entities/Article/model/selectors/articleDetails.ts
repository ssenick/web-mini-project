import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type Article } from '../types/article';

export const getArticleDetailsData = (state: StateSchema): Article | undefined => state.articleDetails?.data;
export const getArticleDetailsForms = (state: StateSchema): Article | undefined =>
   state.articleDetails?.forms;
export const getArticleDetailsIsLoading = (state: StateSchema): boolean =>
   state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema): string | undefined => state.articleDetails?.error;
