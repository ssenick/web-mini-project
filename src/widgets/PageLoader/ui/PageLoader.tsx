import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { LoaderPoints } from '@/shared/ui/LoaderPoints/LoaderPoints'

import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps): JSX.Element => {
  return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <LoaderPoints/>
        </div>
  )
})
