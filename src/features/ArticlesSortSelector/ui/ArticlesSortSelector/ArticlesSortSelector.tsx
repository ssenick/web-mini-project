import { ArticleSortField } from 'entities/Article/model/types/article'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { type SortOrder } from 'shared/types'
import { Select, type SelectOption, SelectVariant } from 'shared/ui/Select/Select'
import cls from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  search: string
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeSearch: (search: string) => void

}

export const ArticlesSortSelector = memo((props: ArticlesSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('Возрастанию')
    },
    {
      value: 'desc',
      content: t('Убыванию')
    }
  ], [t])

  const sortOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
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
  ], [t])

  return (
        <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
          <Select
              className={cls.sort}
              label={`${t('Сортировать по')}:`}
              options={sortOptions}
              value={sort}
              onChange={onChangeSort}
              variant={SelectVariant.INVERSE_BG}
          />
          <Select
              className={cls.order}
              label={`${t('Расположить по')}:`}
              options={orderOptions}
              value={order}
              onChange={onChangeOrder}
              variant={SelectVariant.INVERSE_BG}
          />
        </div>
  )
})
