import { memo, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import AvatarImage from '../../assets/icons/avatar.svg';
import { AppImage } from '../AppImage/AppImage';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps {
   className?: string;
   src?: string;
   alt?: string;
   size?: number;
}

// const spareImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wpzdFY5YHIXeBfCiFyK5E7yFgWFl8gvZhhhimODJIrsbmB2GoVG2FyXX9Bs5avvwbow&usqp=CAU'
export const Avatar = memo((props: AvatarProps) => {
   const { className, src, alt = 'Avatar image', size = 100 } = props;

   const imageSkeleton = <Skeleton border={'50%'} width={'100%'} height={'100%'} />;
   const imageError = <Icon width={size} height={size} Svg={AvatarImage} />;

   const styles = useMemo(
      () => ({
         width: size,
         height: size,
         flexBasis: size,
      }),
      [size],
   );

   return (
      <div data-testid={'avatar'} style={styles} className={classNames(cls.Avatar, {}, [className])}>
         {/* <img src={src || spareImage} alt={alt}/> */}
         <AppImage
            className={cls.image}
            src={src}
            fallback={imageSkeleton}
            errorFallback={imageError}
            alt={alt}
         />
      </div>
   );
});
