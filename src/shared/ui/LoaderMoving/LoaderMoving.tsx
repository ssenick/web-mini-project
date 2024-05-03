import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './LoaderMoving.module.scss';

interface LoaderMovingProps {
   className?: string;
}

export const LoaderMoving = memo(({ className }: LoaderMovingProps) => {
   return <div className={classNames(cls.LoaderMoving, {}, [className])} />;
});
