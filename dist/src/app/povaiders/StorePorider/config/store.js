import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
var rootReducer = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
};
export function createReduxStore(initialStore) {
    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialStore
    });
}
