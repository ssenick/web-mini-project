var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { combineReducers } from '@reduxjs/toolkit';
export function createReducerManager(initialReducers) {
    var reducers = __assign({}, initialReducers);
    var combinedReducer = combineReducers(reducers);
    var keysToRemove = [];
    return {
        getReducerMap: function () { return reducers; },
        reduce: function (state, action) {
            if (keysToRemove.length > 0) {
                state = __assign({}, state);
                for (var _i = 0, keysToRemove_1 = keysToRemove; _i < keysToRemove_1.length; _i++) {
                    var key = keysToRemove_1[_i];
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: function (key, reducer) {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: function (key) {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        }
    };
}
