import { AddNewCommentForm } from 'features/AddNewCommentForm'
import { addCommentForArticle } from 'features/AddNewCommentForm/model/services/addCommentForArticle'
import { ArticleCommentList } from 'features/ArticleCommentList'
import { memo, Suspense, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { VStack } from 'shared/ui/Stack'

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
            <Suspense fallback={''}>
                <AddNewCommentForm onSendComment={onSendComment}/>
            </Suspense>
            <ArticleCommentList id={id}/>
        </VStack>
  )
})
