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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo, Suspense, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints';
import { Modal } from 'shared/ui/Modal/Modal';
import { loginActions } from '../../model/slice/loginSlice';
import { LoginFormAsync } from '../LoginForm/LoginFormAsync';
export var LoginModal = memo(function (_a) {
    var className = _a.className, isOpen = _a.isOpen, onClose = _a.onClose, isCloseModal = _a.isCloseModal;
    var dispatch = useAppDispatch();
    useEffect(function () {
        if (!isOpen) {
            dispatch(loginActions.setUsername(''));
            dispatch(loginActions.setPassword(''));
            dispatch(loginActions.setError());
        }
    }, [dispatch, isOpen]);
    return (_jsx(Modal, __assign({ className: className, isOpen: isOpen, onClose: onClose, lazy: true, isCloseModal: isCloseModal }, { children: _jsx(Suspense, __assign({ fallback: _jsx(LoaderPoints, {}) }, { children: _jsx(LoginFormAsync, {}) })) })));
});