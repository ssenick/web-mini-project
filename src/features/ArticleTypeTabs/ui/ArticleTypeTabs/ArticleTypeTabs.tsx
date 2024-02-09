import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ArticleType } from '@/entities/Article/model/consts/articleConsts'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Tabs, type TabsItem } from '@/shared/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const {
    className,
    value,
    onChangeType
  } = props
  const { t } = useTranslation()
  const typeTabs = useMemo<TabsItem[]>(() => [
    { value: ArticleType.ALL, content: t('Все') },
    { value: ArticleType.IT, content: t('Айти') },
    { value: ArticleType.SCIENCE, content: t('Наука') },
    { value: ArticleType.ECONOMICS, content: t('Экономика') }
  ], [t])

  const onTabClick = useCallback((tab: TabsItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
            <Tabs
                className={classNames('', {}, [className])}
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClick}/>
  )
})
