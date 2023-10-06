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
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Input, InputVariant } from 'shared/ui/Input/Input';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectros/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectros/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
export var LoginForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var username = useSelector(getLoginUsername);
    var password = useSelector(getLoginPassword);
    var dispatch = useDispatch();
    var onChangeUsername = useCallback(function (value) {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () {
        // @ts-ignore
        dispatch(loginByUsername({ username: username, password: password }));
    }, [dispatch, username, password]);
    return (_jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Input, { placeholder: t('User name'), variant: InputVariant.INVERSE_BG, onChange: onChangeUsername, value: username }), _jsx(Input, { type: 'password', placeholder: t('Password'), variant: InputVariant.INVERSE_BG, onChange: onChangePassword, value: password }), _jsx("div", __assign({ className: cls.loginBottom }, { children: _jsx(Button, __assign({ size: ButtonSize.M, variant: ButtonVariant.BORDER, onClick: onLoginClick }, { children: t('Вход') })) }))] })));
});
