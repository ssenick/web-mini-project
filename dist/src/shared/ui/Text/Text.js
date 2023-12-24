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
var _a;
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';
export var TextVariant;
(function (TextVariant) {
    TextVariant["NORMAL"] = "normal";
    TextVariant["ERROR"] = "error";
})(TextVariant || (TextVariant = {}));
export var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "left";
    TextAlign["CENTER"] = "center";
    TextAlign["RIGHT"] = "right";
})(TextAlign || (TextAlign = {}));
export var TextFontSize;
(function (TextFontSize) {
    TextFontSize["SXS"] = "sizeSXS";
    TextFontSize["XS"] = "sizeXS";
    TextFontSize["SM"] = "sizeSM";
    TextFontSize["M"] = "sizeM";
    TextFontSize["L"] = "sizeL";
    TextFontSize["XL"] = "sizeXL";
})(TextFontSize || (TextFontSize = {}));
var mapSizeToHeaderTag = (_a = {},
    _a[TextFontSize.SXS] = 'h6',
    _a[TextFontSize.XS] = 'h5',
    _a[TextFontSize.SM] = 'h4',
    _a[TextFontSize.M] = 'h3',
    _a[TextFontSize.L] = 'h2',
    _a[TextFontSize.XL] = 'h1',
    _a);
export var Text = memo(function (props) {
    var className = props.className, title = props.title, text = props.text, _a = props.variant, variant = _a === void 0 ? TextVariant.NORMAL : _a, _b = props.size, size = _b === void 0 ? TextFontSize.M : _b, _c = props.texAlign, texAlign = _c === void 0 ? TextAlign.LEFT : _c;
    var HeaderTag = mapSizeToHeaderTag[size];
    return (_jsxs("div", __assign({ className: classNames(cls.Text, {}, [className, cls[variant], cls[size], cls[texAlign]]) }, { children: [title && _jsx(HeaderTag, __assign({ className: cls.title }, { children: title })), text && _jsx("p", __assign({ className: cls.text }, { children: text }))] })));
});
