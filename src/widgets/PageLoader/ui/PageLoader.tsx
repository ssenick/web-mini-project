import { classNames } from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { LoaderPoints } from 'shared/ui/LoaderPoints/LoaderPoints'
import { memo } from 'react'

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
