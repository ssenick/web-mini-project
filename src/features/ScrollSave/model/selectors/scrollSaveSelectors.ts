import { createSelector } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/povaiders/StoreProvaider';

import { type ScrollSchema } from '../types/ScrollSaveSchema';

export const getScrollSave = (state: StateSchema): ScrollSchema => state.scrollSave.scroll;

export const getScrollSaveByPath = createSelector(
   getScrollSave,
   (state: StateSchema, path: string) => path,
   (scroll, path) => scroll[path] || 0,
);
