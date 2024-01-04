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
import { Menu } from '@headlessui/react';
import { memo, useState } from 'react';
import { usePopper } from 'react-popper';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
export var Dropdown = memo(function (props) {
    var className = props.className, items = props.items, trigger = props.trigger;
    var _a = useState(null), referenceElement = _a[0], setReferenceElement = _a[1];
    var _b = useState(null), popperElement = _b[0], setPopperElement = _b[1];
    var _c = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
        modifiers: [{ name: 'flip', options: { padding: 10, fallbackPlacements: ['bottom-end', 'bottom-start'] } },
            { name: 'offset', options: { offset: [0, 10] } }]
    }), styles = _c.styles, attributes = _c.attributes;
    return (_jsx("div", __assign({ className: classNames(cls.Dropdown, {}, [className]) }, { children: _jsxs(Menu, { children: [_jsx(Menu.Button, __assign({ className: cls.button, ref: setReferenceElement }, { children: trigger })), _jsx(Menu.Items, __assign({ className: cls.list, style: styles.popper }, attributes.popper, { ref: setPopperElement }, { children: items.map(function (item, index) {
                        if (item.href) {
                            return (_jsx(Menu.Item, __assign({ disabled: item.disabled }, { children: function (_a) {
                                    var _b;
                                    var active = _a.active;
                                    return (_jsx(AppLink, __assign({ to: item.href, disabled: item.disabled, className: classNames(cls.content, (_b = {}, _b[cls.active] = active, _b)) }, { children: item.content })));
                                } }), index));
                        }
                        return (_jsx(Menu.Item, __assign({ disabled: item.disabled }, { children: function (_a) {
                                var _b;
                                var active = _a.active;
                                return (_jsx("button", __assign({ type: "button", disabled: item.disabled, onClick: item.onClick, className: classNames(cls.content, (_b = {}, _b[cls.active] = active, _b)) }, { children: item.content })));
                            } }), index));
                    }) }))] }) })));
});
