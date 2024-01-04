import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page';
var AboutPage = memo(function () {
    var t = useTranslation('about').t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var inputOnChange = useCallback(function (val) {
        setValue(val);
    }, []);
    return (_jsxs(Page, { children: [t('Заголовок страницы'), _jsx(Input, { value: value, onChange: inputOnChange })] }));
});
export default AboutPage;
