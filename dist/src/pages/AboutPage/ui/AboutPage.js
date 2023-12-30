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
import { RoutPath } from 'shared/config/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page';
var dropDownItems = [
    {
        content: 'Gjpasda',
        disabled: false
    },
    {
        content: 'Link',
        href: RoutPath.main,
        disabled: false
    },
    {
        content: 'asdasdsadsa',
        href: RoutPath.main,
        disabled: false
    }
];
var AboutPage = memo(function () {
    var t = useTranslation('about').t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var inputOnChange = useCallback(function (val) {
        setValue(val);
    }, []);
    return (_jsxs(Page, { children: [t('Заголовок страницы'), _jsx(Input, { value: value, onChange: inputOnChange }), _jsx("div", __assign({ style: { display: 'flex', justifyContent: 'center' } }, { children: _jsx(Dropdown, { items: dropDownItems, trigger: 'CLICK' }) }))] }));
});
export default AboutPage;
