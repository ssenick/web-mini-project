import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import cls from './LoaderPoints.module.scss'

interface LoaderPointsProps {
  className?: string
}

export const LoaderPoints = memo(({ className }: LoaderPointsProps): JSX.Element => {
  return (
        <div className={classNames(cls.LoaderPoints, {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
  )
})
