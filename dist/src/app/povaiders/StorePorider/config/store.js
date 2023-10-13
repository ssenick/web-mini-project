import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reduserManager';
export function createReduxStore(initialStore) {
    var rootReducer = {
        counter: counterReducer,
        user: userReducer
    };
    var reducerManager = createReducerManager(rootReducer);
    var store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialStore
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reduserManager = reducerManager;
    return store;
}
