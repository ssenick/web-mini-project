import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type Article } from '../types/article';

export const getNewArticleData = (state: StateSchema): Article | undefined => state.newArticle?.forms;
