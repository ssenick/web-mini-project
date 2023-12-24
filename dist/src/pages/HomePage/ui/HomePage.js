import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
var HomePage = memo(function () {
    var t = useTranslation('home').t;
    return (_jsxs(Page, { children: [t('Заголовок страницы'), _jsx("div", { children: _jsx(Counter, {}) })] }));
});
export default HomePage;
