import { jsx as _jsx } from "react/jsx-runtime";
import { ArticleType } from 'entities/Article/model/types/article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tabs/Tabs';
export var ArticleTypeTabs = memo(function (props) {
    var className = props.className, value = props.value, onChangeType = props.onChangeType;
    var t = useTranslation().t;
    var typeTabs = useMemo(function () { return [
        { value: ArticleType.ALL, content: t('Все') },
        { value: ArticleType.IT, content: t('Айти') },
        { value: ArticleType.SCIENCE, content: t('Наука') },
        { value: ArticleType.ECONOMICS, content: t('Экономика') }
    ]; }, [t]);
    var onTabClick = useCallback(function (tab) {
        onChangeType(tab.value);
    }, [onChangeType]);
    return (_jsx(Tabs, { className: classNames('', {}, [className]), tabs: typeTabs, value: value, onTabClick: onTabClick }));
});
