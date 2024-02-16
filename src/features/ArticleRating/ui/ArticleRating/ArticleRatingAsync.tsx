import { type FC, lazy, Suspense } from 'react'

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

import { type ArticleRatingProps } from './ArticleRating'
const ArticleRatingLazy = lazy<FC<ArticleRatingProps>>(async () => await import('./ArticleRating'))
export const ArticleRatingAsync = (props: ArticleRatingProps): JSX.Element => {
  return (
        <Suspense fallback={<Skeleton width={'100%'} height={126}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
  )
}
