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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useCallback, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextFontSize } from '../Text/Text';
import cls from './TextArea.module.scss';
export var TextArea = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, readonly = props.readonly, label = props.label, otherProps = __rest(props, ["className", "value", "onChange", "readonly", "label"]);
    var _a = useState(false), isFocus = _a[0], setIsFocus = _a[1];
    var onChangeHandler = useCallback(function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, [onChange]);
    var onFocus = useCallback(function () {
        if (!readonly)
            setIsFocus(true);
    }, [readonly]);
    var onBlur = useCallback(function () {
        setIsFocus(false);
    }, []);
    var mods = useMemo(function () {
        var _a;
        return (_a = {},
            _a[cls.isFocus] = isFocus,
            _a[cls.readonly] = readonly,
            _a);
    }, [isFocus, readonly]);
    if (label) {
        return (_jsx("div", __assign({ className: classNames(cls.TextArea, mods, [className]) }, { children: _jsxs("label", { children: [label && _jsx(Text, { size: TextFontSize.SXS, title: label, className: cls.label }), _jsx("textarea", __assign({ "data-testid": 'input', value: value, onChange: onChangeHandler, onFocus: onFocus, onBlur: onBlur, readOnly: readonly }, otherProps))] }) })));
    }
    return (_jsx("div", __assign({ className: classNames(cls.TextArea, mods, [className]) }, { children: _jsx("textarea", __assign({ "data-testid": 'input', value: value, onChange: onChangeHandler, onFocus: onFocus, onBlur: onBlur, readOnly: readonly }, otherProps)) })));
});
