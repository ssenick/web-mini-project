import { memo, useCallback } from 'react'

import { addCommentForArticle, AddNewCommentForm } from '@/features/AddNewCommentForm'
import { ArticleCommentList } from '@/features/ArticleCommentList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { VStack } from '@/shared/ui/Stack'

interface ArticleCommentsProps {
  className?: string
  id?: string
}

export const ArticleComments = memo(({ className, id }: ArticleCommentsProps) => {
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  return (
        <VStack gap={'25'} className={classNames('', {}, [className])}>
            <AddNewCommentForm onSendComment={onSendComment}/>
            <ArticleCommentList id={id}/>
        </VStack>
  )
})
