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
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var id = useParams().id;
    if (!id) {
        return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: t('Статья не найдена') })));
    }
    return (_jsx("div", __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: _jsx(ArticleDetails, { id: id }) })));
};
export default memo(ArticleDetailsPage);
