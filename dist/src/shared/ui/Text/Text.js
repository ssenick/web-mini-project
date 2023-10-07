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
import cls from './Text.module.scss';
export var TextVariant;
(function (TextVariant) {
    TextVariant["NORMAL"] = "normal";
    TextVariant["ERROR"] = "error";
})(TextVariant || (TextVariant = {}));
export var TextFontSize;
(function (TextFontSize) {
    TextFontSize["XS"] = "sizeXS";
    TextFontSize["SM"] = "sizeSM";
    TextFontSize["M"] = "sizeM";
    TextFontSize["L"] = "sizeL";
})(TextFontSize || (TextFontSize = {}));
export var Text = function (props) {
    var className = props.className, title = props.title, text = props.text, _a = props.variant, variant = _a === void 0 ? TextVariant.NORMAL : _a, size = props.size;
    return (_jsxs("div", __assign({ className: classNames(cls.Text, {}, [className, cls[variant], cls[size]]) }, { children: [title && _jsx("p", __assign({ className: cls.title }, { children: title })), text && _jsx("p", __assign({ className: cls.text }, { children: text }))] })));
};
