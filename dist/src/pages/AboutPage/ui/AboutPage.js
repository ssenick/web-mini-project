import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
var AboutPage = function () {
    var t = useTranslation('about').t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var inputOnChange = function (val) {
        setValue(val);
    };
    return (_jsxs("div", { children: [t('Заголовок страницы'), _jsx(Input, { value: value, onChange: inputOnChange })] }));
};
export default AboutPage;
