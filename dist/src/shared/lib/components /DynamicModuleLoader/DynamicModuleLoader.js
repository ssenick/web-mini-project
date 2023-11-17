import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
export var DynamicModuleLoader = function (props) {
    var children = props.children, reducers = props.reducers, _a = props.removeAfterUnmount, removeAfterUnmount = _a === void 0 ? true : _a;
    var store = useStore();
    var dispatch = useDispatch();
    useEffect(function () {
        Object.entries(reducers).forEach(function (_a) {
            var name = _a[0], reducer = _a[1];
            store.reducerManager.add(name, reducer);
            dispatch({ type: "@INIT ".concat(name, " reducer") });
        });
        return function () {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(function (_a) {
                    var name = _a[0];
                    store.reducerManager.remove(name);
                    dispatch({ type: "@DESTROY ".concat(name, " reducer") });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    _jsx(_Fragment, { children: children }));
};
