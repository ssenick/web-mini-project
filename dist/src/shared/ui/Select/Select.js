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
import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextFontSize } from 'shared/ui/Text/Text';
import cls from './Select.module.scss';
export var SelectVariant;
(function (SelectVariant) {
    SelectVariant["NORMAL"] = "clear";
    SelectVariant["INVERSE_BG"] = "inverse-bg";
})(SelectVariant || (SelectVariant = {}));
export var Select = memo(function (props) {
    var className = props.className, label = props.label, value = props.value, readonly = props.readonly, options = props.options, _a = props.variant, variant = _a === void 0 ? SelectVariant.NORMAL : _a, onChange = props.onChange;
    var optionsList = useMemo(function () {
        return options === null || options === void 0 ? void 0 : options.map(function (opt) { return (_jsx("option", __assign({ className: cls.option, value: opt.value }, { children: opt.content }), opt.value)); });
    }, [options]);
    var onChangeHandler = function (e) {
        if (onChange)
            onChange(e.target.value);
    };
    return (_jsxs("div", __assign({ className: classNames(cls.Select, {}, [className, cls[variant]]) }, { children: [label && _jsx(Text, { className: cls.label, size: TextFontSize.SXS, title: label }), _jsx("select", __assign({ onChange: onChangeHandler, disabled: readonly, className: cls.select, value: value }, { children: optionsList }))] })));
});
