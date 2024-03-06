import { memo } from 'react'
import { useParams } from 'react-router-dom'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/widgets/Page'

import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return (
        <Page
            data-testid={'ArticleEditPage'}
            className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? `DA ${id} id` : 'CREATE'}
        </Page>
  )
})
export default ArticleEditPage
