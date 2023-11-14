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
import { useState, useCallback, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './Input.module.scss';
export var InputVariant;
(function (InputVariant) {
    InputVariant["NORMAL"] = "";
    InputVariant["INVERSE_BG"] = "inverse-bg";
})(InputVariant || (InputVariant = {}));
export var Input = memo(function (props) {
    var className = props.className, value = props.value, onChange = props.onChange, _a = props.type, type = _a === void 0 ? 'text' : _a, _b = props.variant, variant = _b === void 0 ? InputVariant.NORMAL : _b, autofocus = props.autofocus, readonly = props.readonly, label = props.label, otherProps = __rest(props, ["className", "value", "onChange", "type", "variant", "autofocus", "readonly", "label"]);
    var _c = useState(false), isFocus = _c[0], setIsFocus = _c[1];
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
    return (_jsx("div", __assign({ "data-testid": 'input-wrapper', className: classNames(cls.inputWrapper, mods, [className, cls[variant]]) }, { children: _jsxs("label", { children: [label && _jsx(Text, { size: TextFontSize.SXS, title: label, className: cls.label }), _jsx("input", __assign({ "data-testid": 'input', value: value, onChange: onChangeHandler, type: type, onFocus: onFocus, onBlur: onBlur, readOnly: readonly }, otherProps, { autoFocus: autofocus }))] }) })));
});
