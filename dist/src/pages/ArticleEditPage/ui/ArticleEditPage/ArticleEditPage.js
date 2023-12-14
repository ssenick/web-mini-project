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
import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import cls from './ArticleEditPage.module.scss';
var ArticleEditPage = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var id = useParams().id;
    var isEdit = Boolean(id);
    return (_jsx(Page, __assign({ className: classNames(cls.ArticleEditPage, {}, [className]) }, { children: isEdit ? "DA ".concat(id, "ID") : 'NOOO' })));
});
export default ArticleEditPage;
