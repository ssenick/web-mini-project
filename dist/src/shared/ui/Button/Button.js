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
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { memo } from 'react';
export var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["CLEAN"] = "clean";
    ButtonVariant["THEME_ICON"] = "icon";
    ButtonVariant["BACKGROUND"] = "background";
    ButtonVariant["BORDER"] = "border";
    ButtonVariant["BORDER_ERROR"] = "border_error";
})(ButtonVariant || (ButtonVariant = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["XS"] = "squareXS";
    ButtonSize["SM"] = "squareSM";
    ButtonSize["M"] = "squareM";
    ButtonSize["L"] = "squareL";
})(ButtonSize || (ButtonSize = {}));
export var Button = memo(function (props) {
    var _a;
    var className = props.className, children = props.children, _b = props.variant, variant = _b === void 0 ? ButtonVariant.CLEAN : _b, square = props.square, withIcon = props.withIcon, _c = props.type, type = _c === void 0 ? 'button' : _c, _d = props.size, size = _d === void 0 ? ButtonSize.XS : _d, otherProps = __rest(props, ["className", "children", "variant", "square", "withIcon", "type", "size"]);
    return (_jsx("button", __assign({ className: classNames(cls.Button, (_a = {}, _a[cls.square] = square, _a[cls.withIcon] = withIcon, _a), [className, cls[variant], cls[size]]), type: type }, otherProps, { children: children })));
});
