import { type FC, lazy, Suspense } from 'react'

import { type ArticleRatingProps } from '@/features/ArticleRating/ui/ArticleRating/ArticleRating'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
const ArticleRatingLazy = lazy<FC<ArticleRatingProps>>(async () => await import('./ArticleRating'))
export const ArticleRatingAsync = (props: ArticleRatingProps): JSX.Element => {
  return (
        <Suspense fallback={<Skeleton width={'100%'} height={126}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
  )
}
