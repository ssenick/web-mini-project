import { type StateSchema } from '@/app/povaiders/StoreProvaider';

export const getFaqSearch = (state: StateSchema): string => state.faq?.search ?? '';
