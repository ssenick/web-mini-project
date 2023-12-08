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
import { ArticleSortField } from 'entities/Article/model/types/article';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectVariant } from 'shared/ui/Select/Select';
import cls from './ArticlesSortSelector.module.scss';
export var ArticlesSortSelector = memo(function (props) {
    var className = props.className, sort = props.sort, order = props.order, onChangeOrder = props.onChangeOrder, onChangeSort = props.onChangeSort;
    var t = useTranslation().t;
    var orderOptions = useMemo(function () { return [
        {
            value: 'asc',
            content: t('Возрастанию')
        },
        {
            value: 'desc',
            content: t('Убыванию')
        }
    ]; }, [t]);
    var sortOptions = useMemo(function () { return [
        {
            value: ArticleSortField.TITLE,
            content: t('Названию')
        },
        {
            value: ArticleSortField.CREATED,
            content: t('Дате создания')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам')
        }
    ]; }, [t]);
    return (_jsxs("div", __assign({ className: classNames(cls.ArticlesSortSelector, {}, [className]) }, { children: [_jsx(Select, { className: cls.sort, label: "".concat(t('Сортировать по'), ":"), options: sortOptions, value: sort, onChange: onChangeSort, variant: SelectVariant.INVERSE_BG }), _jsx(Select, { className: cls.order, label: "".concat(t('Расположить по'), ":"), options: orderOptions, value: order, onChange: onChangeOrder, variant: SelectVariant.INVERSE_BG })] })));
});
