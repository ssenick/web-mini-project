import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
export function createReduxStore(initialStore) {
    var rootReducer = {
        counter: counterReducer,
        user: userReducer
    };
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialStore
    });
}
