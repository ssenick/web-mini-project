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
import { VStack } from 'shared/ui/Stack';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
export var NotFoundPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('notFound').t;
    return (_jsx(VStack, __assign({ align: 'center', justify: 'center', className: classNames(cls.NotFoundPage, {}, [className]) }, { children: _jsxs(VStack, __assign({ align: 'center', justify: 'center', className: cls.container, "data-text": '404' }, { children: [_jsx("div", __assign({ className: classNames(cls.title, {}, [cls.glitch]), "data-text": '404' }, { children: "404" })), _jsx("div", __assign({ className: classNames(cls.description, {}, [cls.glitch]), "data-text": t('Страница не найдена') }, { children: t('Страница не найдена') }))] })) })));
});
