import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

import { ArticleView } from '../../model/consts/articleConsts'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
            <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <div className={cls.about}>
                        <div className={cls.user}>
                            <Skeleton width={30} height={30} border={'50%'}/>
                            <Skeleton width={80} height={22} border={'5px'}/>
                        </div>
                        <Skeleton className={cls.title} width={70} height={30} border={'5px'}/>
                        <Skeleton className={cls.types} width={150} height={25} border={'5px'}/>
                    </div>
                    <Skeleton className={cls.createAtt} width={65} height={18} border={'5px'}/>
                </div>
                <div className={cls.imageBlock}>
                    <Skeleton className={cls.image} width={'100%'} height={'100%'} border={'5px'}/>
                </div>

                <Skeleton width={'100%'} height={120} border={'5px'}/>
                <div className={cls.bottom}>
                    <Skeleton width={100} height={30} border={'5px'}/>
                    <div className={cls.viewWrapper}>
                        <Skeleton className={cls.createAtt} width={40} height={18} border={'5px'}/>
                    </div>
                </div>
            </article>
    )
  }

  return (
        <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.imageBlock}>
                <Skeleton className={cls.image} width={'100%'} height={'100%'} border={'5px'}/>
            </div>
            <div className={cls.info}>
                <Skeleton className={cls.types} width={90} height={18} border={'5px'}/>
                <Skeleton width={40} height={18} border={'5px'}/>
            </div>
            <Skeleton className={cls.title} width={'100%'} height={30} border={'5px'}/>
        </article>
  )
})
