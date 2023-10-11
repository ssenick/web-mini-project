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
import { memo, useCallback, useEffect } from 'react';
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
import { getLoginIsLoading } from '../../model/selectros/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectros/getLoginError/getLoginError';
import { Text, TextFontSize, TextVariant } from 'shared/ui/Text/Text';
export var LoginForm = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var username = useSelector(getLoginUsername);
    var password = useSelector(getLoginPassword);
    var isLoading = useSelector(getLoginIsLoading);
    var error = useSelector(getLoginError);
    var dispatch = useDispatch();
    var onChangeUsername = useCallback(function (value) {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    var onChangePassword = useCallback(function (value) {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    var onLoginClick = useCallback(function () {
        if (username && password) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            dispatch(loginByUsername({ username: username, password: password }));
        }
    }, [dispatch, username, password]);
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Enter' && username && password) {
            onLoginClick();
        }
    }, [onLoginClick, username, password]);
    useEffect(function () {
        window.addEventListener('keydown', onKeyDown);
        return function () {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
    // useEffect(() => {
    //   return () => {
    //     if (error) {
    //         console.log(111)
    //       dispatch(loginActions.setUsername(''))
    //       dispatch(loginActions.setPassword(''))
    //       dispatch(loginActions.setError())
    //     }
    //   }
    // }, [dispatch, error])
    return (_jsxs("div", __assign({ className: classNames(cls.LoginForm, {}, [className]) }, { children: [_jsx(Text, { className: cls.title, size: TextFontSize.M, title: t('Авторизация') }), error && _jsx(Text, { className: cls.error, variant: TextVariant.ERROR, size: TextFontSize.XS, text: t('Пользователь не найдет или данные не верны') }), _jsxs("div", __assign({ className: cls.wrapper }, { children: [_jsx(Input, { placeholder: t('User name'), variant: InputVariant.INVERSE_BG, onChange: onChangeUsername, value: username, autofocus: true }), _jsx(Input, { type: 'password', placeholder: t('Password'), variant: InputVariant.INVERSE_BG, onChange: onChangePassword, value: password }), _jsx("div", __assign({ className: cls.loginBottom }, { children: _jsx(Button, __assign({ size: ButtonSize.M, variant: ButtonVariant.BORDER, onClick: onLoginClick, disabled: isLoading }, { children: t('Вход') })) }))] }))] })));
});
