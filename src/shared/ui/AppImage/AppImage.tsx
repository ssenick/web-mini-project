import { type ImgHTMLAttributes, memo, type ReactElement, useLayoutEffect, useState } from 'react';

import TestImage from '@/shared/assets/test/image.jpg';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
   className?: string;
   fallback?: ReactElement;
   errorFallback?: ReactElement;
}
export const AppImage = memo((props: AppImageProps) => {
   const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   useLayoutEffect(() => {
      const img = new Image();
      img.src = src ?? '';
      img.onload = () => {
         setIsLoading(false);
      };
      img.onerror = () => {
         setIsLoading(false);
         setHasError(true);
      };
   }, [src]);

   if (isLoading && fallback) {
      return fallback;
   }
   if (errorFallback && hasError) {
      return errorFallback;
   }

   if (__PROJECT__ === 'storybook') {
      return <img className={className} src={TestImage} alt={alt} {...otherProps} />;
   }
   return <img className={className} src={src} alt={alt} {...otherProps} />;
});
