import { type FC, memo, type SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGElement> {
   className?: string;
   Svg: FC<SVGProps<SVGElement>>;
   mainColor?: boolean;
}

export const Icon = memo(({ className, Svg, mainColor, ...otherProps }: IconProps) => {
   return (
      <Svg className={classNames(cls.Icon, { [cls.mainColor]: mainColor }, [className])} {...otherProps} />
   );
});
