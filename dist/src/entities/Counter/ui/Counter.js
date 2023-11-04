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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCallback } from 'react';
import { counterActions } from '../model/slice/counterSlice';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
export var Counter = function () {
    var dispatch = useDispatch();
    var counterValue = useSelector(getCounterValue);
    var increment = useCallback(function () {
        dispatch(counterActions.increment());
    }, [dispatch]);
    var decrement = useCallback(function () {
        dispatch(counterActions.decrement());
    }, [dispatch]);
    return (_jsxs("div", __assign({ "data-testid": 'counter' }, { children: [_jsx("h1", __assign({ "data-testid": 'value' }, { children: counterValue })), _jsx(Button, __assign({ "data-testid": 'btn-increment', variant: ButtonVariant.BACKGROUND, onClick: increment }, { children: "+1" })), _jsx(Button, __assign({ "data-testid": 'btn-decrement', variant: ButtonVariant.BACKGROUND, onClick: decrement }, { children: "-1" }))] })));
};
