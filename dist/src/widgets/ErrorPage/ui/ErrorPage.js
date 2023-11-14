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
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonVariant, Button } from 'shared/ui/Button/Button';
import { memo } from 'react';
var reloadPage = function () {
    location.reload();
};
export var ErrorPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames(cls.ErrorPage, {}, [className]) }, { children: _jsxs("div", __assign({ className: cls.container, "data-text": 'Whoops!' }, { children: [_jsx("div", __assign({ className: classNames(cls.title, {}, [cls.glitch]), "data-text": t('упс') }, { children: t('упс') })), _jsx("div", __assign({ className: classNames(cls.description, {}, [cls.glitch]), "data-text": t('что-то пошло не так') }, { children: t('что-то пошло не так') })), _jsx(Button, __assign({ onClick: reloadPage, className: cls.btn, variant: ButtonVariant.BACKGROUND }, { children: t('обновить станицу') }))] })) })));
});
