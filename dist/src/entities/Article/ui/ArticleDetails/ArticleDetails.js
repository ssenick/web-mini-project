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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DateIcon from 'shared/assets/icons/date.svg';
import ViewIcon from 'shared/assets/icons/view.svg';
import { RoutPath } from 'shared/config/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';
var reducers = {
    articleDetails: articleDetailsReducer
};
export var ArticleDetails = memo(function (_a) {
    var className = _a.className, id = _a.id;
    var t = useTranslation('articleDetails').t;
    var dispatch = useAppDispatch();
    var isLoading = useSelector(getArticleDetailsIsLoading);
    var error = useSelector(getArticleDetailsError);
    var article = useSelector(getArticleDetailsData);
    var navigate = useNavigate();
    var onBackToList = useCallback(function () {
        navigate(RoutPath.articles);
    }, [navigate]);
    var renderBlock = useCallback(function (block) {
        switch (block === null || block === void 0 ? void 0 : block.type) {
            case ArticleBlockType.TEXT:
                return (_jsx(ArticleTextBlockComponent, { className: cls.block, block: block }, block.id));
            case ArticleBlockType.IMAGE:
                return (_jsx(ArticleImageBlockComponent, { className: cls.block, block: block }, block.id));
            case ArticleBlockType.CODE:
                return (_jsx(ArticleCodeBlockComponent, { className: cls.block, block: block }, block.id));
        }
    }, []);
    var content;
    useInitialEffect(function () {
        void dispatch(fetchArticleById(id));
    });
    if (isLoading) {
        content = (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx("div", __assign({ className: cls.header__avatar }, { children: _jsx(Skeleton, { width: 100, height: 100, border: '50%' }) })), _jsxs("div", __assign({ className: cls.header__content }, { children: [_jsx(Skeleton, { className: cls.header__title, width: '38%', height: 40, border: '5px' }), _jsx(Skeleton, { className: cls.header__subtitle, width: '38%', height: 30, border: '5px' }), _jsx("div", __assign({ className: cls.header__block }, { children: _jsx(Skeleton, { className: cls.header__subtitle, width: '11%', height: 23, border: '5px' }) })), _jsx("div", __assign({ className: cls.header__block }, { children: _jsx(Skeleton, { className: cls.header__subtitle, width: '18%', height: 23, border: '5px' }) }))] }))] })), _jsxs("div", __assign({ className: cls.article }, { children: [_jsx(Skeleton, { className: cls.block, width: '100%', height: 100, border: '5px' }), _jsx(Skeleton, { className: cls.block, width: '100%', height: 100, border: '5px' }), _jsx(Skeleton, { className: cls.block, width: '100%', height: 100, border: '5px' }), _jsx(Skeleton, { className: cls.block, width: '100%', height: 100, border: '5px' }), _jsx(Skeleton, { className: cls.block, width: '100%', height: 100, border: '5px' })] }))] }));
    }
    else if (error) {
        content = (_jsx(Text, { size: TextFontSize.L, texAlign: TextAlign.CENTER, title: t('Статья не найдена') }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: cls.header }, { children: [_jsx("div", __assign({ className: cls.header__avatar }, { children: _jsx(Avatar, { size: 120, className: cls.avatar, src: article === null || article === void 0 ? void 0 : article.img }) })), _jsxs("div", __assign({ className: cls.header__content }, { children: [_jsx(Text, { className: cls.header__title, size: TextFontSize.XL, title: article === null || article === void 0 ? void 0 : article.title }), _jsx(Text, { className: cls.header__subtitle, size: TextFontSize.XL, text: article === null || article === void 0 ? void 0 : article.subtitle }), _jsxs("div", __assign({ className: cls.header__block }, { children: [_jsx(Icon, { Svg: ViewIcon, className: cls.header__icon }), _jsx(Text, { className: cls.header__info, size: TextFontSize.L, text: String(article === null || article === void 0 ? void 0 : article.views) })] })), _jsxs("div", __assign({ className: cls.header__block }, { children: [_jsx(Icon, { Svg: DateIcon, className: cls.header__icon }), _jsx(Text, { className: cls.header__info, size: TextFontSize.L, text: String(article === null || article === void 0 ? void 0 : article.createdAt) })] }))] }))] })), _jsx("div", __assign({ className: cls.article }, { children: article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock) }))] }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames(cls.ArticleDetails, {}, [className]) }, { children: [_jsx(Button, __assign({ className: cls.btnBack, onClick: onBackToList, size: ButtonSize.XS, variant: ButtonVariant.BORDER }, { children: t('Назад к списку') })), content] })) })));
});
