import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type SortOrder } from '@/shared/types';
import { ListBox, type ListBoxItem } from '@/shared/ui/ListBox/ListBox';

import cls from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
   className?: string;
   sort: ArticleSortField;
   order: SortOrder;
   search: string;
   onChangeOrder: (newOrder: SortOrder) => void;
   onChangeSort: (newSort: ArticleSortField) => void;
   onChangeSearch: (search: string) => void;
}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
   const { className, sort, order, onChangeOrder, onChangeSort } = props;
   const { t } = useTranslation();

   const orderOptions = useMemo<Array<ListBoxItem<SortOrder>>>(
      () => [
         {
            value: 'asc',
            content: t('Возрастанию'),
         },
         {
            value: 'desc',
            content: t('Убыванию'),
         },
      ],
      [t],
   );

   const sortOptions = useMemo<Array<ListBoxItem<ArticleSortField>>>(
      () => [
         {
            value: ArticleSortField.TITLE,
            content: t('Названию'),
         },
         {
            value: ArticleSortField.CREATED,
            content: t('Дате создания'),
         },
         {
            value: ArticleSortField.VIEWS,
            content: t('Просмотрам'),
         },
      ],
      [t],
   );

   const onChangeSortHandler = useCallback(
      (value: string) => {
         onChangeSort?.(value as ArticleSortField);
      },
      [onChangeSort],
   );

   const onChangeOrderHandler = useCallback(
      (value: string) => {
         onChangeOrder?.(value as SortOrder);
      },
      [onChangeOrder],
   );

   return (
      <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
         <ListBox
            className={cls.sort}
            label={`${t('Сортировать по')}:`}
            items={sortOptions}
            value={sort}
            contentTitle
            onChange={onChangeSortHandler}
         />
         <ListBox
            className={cls.order}
            label={`${t('Расположить по')}:`}
            items={orderOptions}
            value={order}
            contentTitle
            onChange={onChangeOrderHandler}
         />
      </div>
   );
});
