import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { scrollReducer } from '@/features/ScrollSave';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

import { createReducerManager } from './reducerManager';
import { type StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
   const rootReducers: ReducersMapObject<StateSchema> = {
      ...asyncReducers,
      counter: counterReducer,
      user: userReducer,
      scrollSave: scrollReducer,
      [rtkApi.reducerPath]: rtkApi.reducer,
   };

   const reducerManager = createReducerManager(rootReducers);

   const store = configureStore({
      reducer: reducerManager.reduce,
      devTools: __IS_DEV__,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            thunk: {
               extraArgument: {
                  api: $api,
               },
            },
         }).concat(rtkApi.middleware),
   });

   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-expect-error
   store.reducerManager = reducerManager;

   return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
