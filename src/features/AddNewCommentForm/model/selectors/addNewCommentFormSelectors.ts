import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getAddNewCommentFormText = (state: StateSchema): string | undefined =>
   state.addCommentForm?.text;
export const getAddNewCommentFormError = (state: StateSchema): string | undefined =>
   state.addCommentForm?.error;
export const getAddNewCommentFormIsLoading = (state: StateSchema): boolean =>
   state.addCommentForm?.isLoading || false;
