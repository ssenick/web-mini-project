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
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import { Text, TextFontSize } from '../Text/Text';
import { Button, ButtonVariant } from '../Button/Button';
import cls from './Code.module.scss';
var delay = 500;
export var Code = memo(function (_a) {
    var className = _a.className, text = _a.text;
    var _b = useState(false), isCopy = _b[0], setIsCopy = _b[1];
    var t = useTranslation().t;
    var onCopy = useCallback(function () {
        void navigator.clipboard.writeText(text);
        setIsCopy(true);
        setTimeout(function () {
            setIsCopy(false);
        }, delay);
    }, [text]);
    return (_jsx("div", __assign({ className: classNames(cls.Code, {}, [className]) }, { children: _jsxs("pre", __assign({ className: cls.pre }, { children: [_jsx(Button, __assign({ onClick: onCopy, className: cls.button_copy, variant: ButtonVariant.THEME_ICON }, { children: _jsx(Icon, { Svg: CopyIcon, className: cls.icon }) })), isCopy && (_jsx("div", __assign({ className: cls.massage }, { children: _jsx(Text, { className: cls.textMassage, size: TextFontSize.L, title: t('Текст скопирован') }) }))), _jsx("code", { children: text })] })) })));
});
