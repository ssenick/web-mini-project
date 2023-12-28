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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ArrowIcon from '../../assets/icons/arrow_down.svg';
import { VStack } from '../Stack';
import { Text, TextFontSize } from '../Text/Text';
import cls from './ListBox.module.scss';
export var ListBoxVariant;
(function (ListBoxVariant) {
    ListBoxVariant["STANDARD"] = "standard";
    ListBoxVariant["THEME_ICON"] = "icon";
})(ListBoxVariant || (ListBoxVariant = {}));
export var ListBox = memo(function (props) {
    var _a;
    var className = props.className, items = props.items, value = props.value, _b = props.variant, variant = _b === void 0 ? ListBoxVariant.STANDARD : _b, defaultValue = props.defaultValue, readonly = props.readonly, contentTitle = props.contentTitle, label = props.label, test = props.test, icon = props.icon, onChange = props.onChange;
    var foundItemContent = ((_a = items === null || items === void 0 ? void 0 : items.find(function (item) { return item.value === (value !== null && value !== void 0 ? value : defaultValue); })) === null || _a === void 0 ? void 0 : _a.content) || value;
    return (_jsxs(VStack, __assign({ gap: '5', className: classNames(cls.ListBox, {}, [className, cls[variant]]) }, { children: [label && _jsx(Text, { className: cls.label, size: TextFontSize.SXS, title: label }), _jsxs(HListbox, __assign({ "data-testid": test, value: value, onChange: onChange, disabled: readonly, as: 'div', className: classNames(cls.ListBox, {}, [className]) }, { children: [_jsx(HListbox.Button, __assign({ className: cls.button }, { children: function (_a) {
                            var _b;
                            var open = _a.open;
                            var arrowIcon = _jsx(ArrowIcon, { className: classNames('', (_b = {}, _b[cls.open] = open, _b), []) });
                            return (_jsxs(_Fragment, { children: [contentTitle ? foundItemContent : value !== null && value !== void 0 ? value : defaultValue, !icon && arrowIcon] }));
                        } })), _jsx(HListbox.Options, __assign({ className: cls.options }, { children: items === null || items === void 0 ? void 0 : items.map(function (item) { return (_jsx(HListbox.Option, __assign({ value: item.value, disabled: item.disabled, as: Fragment }, { children: function (_a) {
                                var _b;
                                var active = _a.active, selected = _a.selected;
                                return (_jsx("li", __assign({ className: classNames(cls.item, (_b = {}, _b[cls.active] = active, _b[cls.selected] = selected, _b[cls.disabled] = item.disabled, _b), []) }, { children: item.content })));
                            } }), item.value)); }) }))] }))] })));
});
