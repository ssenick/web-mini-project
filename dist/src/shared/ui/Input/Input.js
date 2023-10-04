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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
export var InputVariant;
(function (InputVariant) {
    InputVariant["NORMAL"] = "";
    InputVariant["INVERSE_BG"] = "inverse-bg";
})(InputVariant || (InputVariant = {}));
export var Input = function (props) {
    var _a;
    var className = props.className, value = props.value, onChange = props.onChange, _b = props.type, type = _b === void 0 ? 'text' : _b, _c = props.variant, variant = _c === void 0 ? InputVariant.NORMAL : _c, otherProps = __rest(props, ["className", "value", "onChange", "type", "variant"]);
    var _d = useState(false), isFocus = _d[0], setIsFocus = _d[1];
    var onChangeHandler = useCallback(function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, [onChange]);
    var onFocus = useCallback(function () {
        setIsFocus(true);
    }, []);
    var onBlur = useCallback(function () {
        setIsFocus(false);
    }, []);
    var mods = (_a = {},
        _a[cls.isFocus] = isFocus,
        _a);
    return (_jsx("div", __assign({ "data-testid": 'input-wrapper', className: classNames(cls.inputWrapper, mods, [className, cls[variant]]) }, { children: _jsx("input", __assign({ "data-testid": 'input', value: value, onChange: onChangeHandler, type: type, onFocus: onFocus, onBlur: onBlur }, otherProps)) })));
};
