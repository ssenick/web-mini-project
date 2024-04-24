import { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorImage from '@/shared/assets/icons/errorImage.svg';
import IconEye from '@/shared/assets/icons/view.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { shuffleArray } from '@/shared/lib/func/shuffleArray';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextFontSize } from '@/shared/ui/Text/Text';

import { useGetPostsPreviewListQuery } from '../../../../api/postsPreviewList';
import { type PostsI } from '../../../../model/types/posts';
import cls from './Slider.module.scss';

interface SlProps {
   className?: string;
}

export const Slider = memo(({ className }: SlProps) => {
   const timer = useRef<ReturnType<typeof setInterval> | null>(null);
   const { t } = useTranslation();
   const { isLoading, error, data } = useGetPostsPreviewListQuery(null);
   const [slides, setSlides] = useState<PostsI[]>([]);

   useEffect(() => {
      if (data) {
         setSlides(shuffleArray(data));
      }
   }, [data, setSlides]);

   useEffect(() => {
      timer.current = setInterval(() => {
         setSlides((prev) => {
            const newArr: PostsI[] = [];
            return newArr.concat(prev.slice(1), prev.slice(0, 1));
         });
      }, 6000);
      return () => {
         if (timer.current) clearTimeout(timer.current);
      };
   }, []);

   if (isLoading || !slides) {
      return (
         <div className={classNames(cls.Sl, {}, [className, cls.isLoading])}>
            <div className={cls.slide}>
               {new Array(6).fill(0).map((item, i) => (
                  <Skeleton border={'5px'} className={cls.item} key={i} />
               ))}
            </div>
         </div>
      );
   } else if (error) {
      return <Text title={t('что-то пошло не так')} size={TextFontSize.L} texAlign={TextAlign.CENTER} />;
   } else {
      return (
         <div className={classNames(cls.Sl, {}, [className])}>
            <div className={cls.slide}>
               {slides.map((item) => (
                  <div key={item.id} className={classNames(cls.item, {}, [`slider${item.id}`])}>
                     <AppImage
                        src={item.img}
                        alt="image"
                        className={cls.img}
                        errorFallback={<Icon className={cls.img} Svg={ErrorImage} />}
                        fallback={<Skeleton className={cls.img} />}
                     />

                     <div className={cls.content}>
                        <Text size={TextFontSize.L} title={item.title} className={cls.title} />
                        <div className={cls.viewWrapper}>
                           <Text className={cls.view} text={String(item.views)} size={TextFontSize.SXS} />
                           <Icon className={cls.icon} width={18} height={18} Svg={IconEye} />
                        </div>
                        <Text text={item.subtitle} className={cls.text} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      );
   }
});
