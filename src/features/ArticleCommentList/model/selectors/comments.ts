import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean | undefined =>
   state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema): string | undefined =>
   state.articleDetailsComments?.error;
