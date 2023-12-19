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
import { getCanEditArticle } from 'entities/Article';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditIcon from 'shared/assets/icons/edit.svg';
import { RoutPath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsHeader.module.scss';
export var ArticleDetailsHeader = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var canEdit = useSelector(getCanEditArticle);
    var article = useSelector(getArticleDetailsData);
    var navigate = useNavigate();
    var goBackToArticles = useCallback(function () {
        navigate(RoutPath.articles, { replace: true, state: 'articleDetails' });
    }, [navigate]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleDetailsHeader, {}, [className]) }, { children: [_jsx(Button, __assign({ className: cls.btnBack, variant: ButtonVariant.BORDER, size: ButtonSize.XS, onClick: goBackToArticles }, { children: t('Назад к списку') })), canEdit && _jsxs(AppLink, __assign({ to: "".concat(RoutPath.articles_edit).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"), className: cls.btnEdit, withIcon: true, variant: AppLinkVariant.BORDER }, { children: [t('Редактировать'), _jsx(EditIcon, {})] }))] })));
});
