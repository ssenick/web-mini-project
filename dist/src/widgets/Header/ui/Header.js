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
import cls from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider';
import LogoDarkIcon from 'shared/assets/icons/logo.svg';
import LogoWhiteIcon from 'shared/assets/icons/logo-w.svg';
import LoginIcon from 'shared/assets/icons/login.svg';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useCallback, useEffect, useState } from 'react';
export var Header = function (_a) {
    var className = _a.className;
    var theme = useTheme().theme;
    var t = useTranslation().t;
    var _b = useState(false), error = _b[0], setError = _b[1];
    var _c = useState(false), isAuthModal = _c[0], setIsAuthModal = _c[1];
    var onCloseModal = useCallback(function () {
        setIsAuthModal(false);
    }, []);
    var onShowModal = useCallback(function () {
        setIsAuthModal(true);
    }, []);
    var onThrow = function () {
        setError(true);
    };
    useEffect(function () {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (_jsxs("header", __assign({ className: classNames(cls.Header, {}, [className]) }, { children: [_jsx(AppLink, __assign({ className: cls.logo, to: '/', variant: AppLinkVariant.CLEAN }, { children: theme === Theme.DARK ? _jsx(LogoWhiteIcon, {}) : _jsx(LogoDarkIcon, {}) })), _jsxs("div", __assign({ className: cls.title }, { children: [" ", t('Главная')] })), _jsxs("div", __assign({ className: cls.action }, { children: [_jsx(Button, __assign({ onClick: onThrow, variant: ButtonVariant.BACKGROUND }, { children: t('ошибка') })), _jsx(LangSwitcher, {}), _jsx(ThemeSwitcher, {}), _jsxs(Button, __assign({ onClick: onShowModal, className: cls.login, variant: ButtonVariant.BACKGROUND, withIcon: true }, { children: [_jsx(LoginIcon, {}), t('Вход')] }))] }))] })));
};
