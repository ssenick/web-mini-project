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
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ArticleDetailsHeader.module.scss';
export var ArticleDetailsHeader = memo(function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetails').t;
    var navigate = useNavigate();
    var canEdit = useSelector(getCanEditArticle);
    var article = useSelector(getArticleDetailsData);
    var onBackToList = useCallback(function () {
        navigate(RoutPath.articles);
    }, [navigate]);
    var onEditArticle = useCallback(function () {
        navigate("".concat(RoutPath.articles_edit).concat(article === null || article === void 0 ? void 0 : article.id, "/edit"));
    }, [navigate, article]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticleDetailsHeader, {}, [className]) }, { children: [_jsx(Button, __assign({ className: cls.btnBack, onClick: onBackToList, size: ButtonSize.XS, variant: ButtonVariant.BORDER }, { children: t('Назад к списку') })), canEdit && _jsxs(Button, __assign({ className: cls.btnEdit, onClick: onEditArticle, size: ButtonSize.XS, withIcon: true, variant: ButtonVariant.BORDER }, { children: [t('Редактировать'), _jsx(EditIcon, {})] }))] })));
});
