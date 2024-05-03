import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { LoaderMoving } from '@/shared/ui/LoaderMoving/LoaderMoving';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
   className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps): JSX.Element => {
   return (
      <div className={classNames(cls.PageLoader, {}, [className])}>
         <LoaderMoving />
      </div>
   );
});
