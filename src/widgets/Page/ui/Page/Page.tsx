import { type FC, type MutableRefObject, type ReactNode, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useMediaQueryValues } from '@/app/povaiders/MediaQueryProvaider';
import { type StateSchema } from '@/app/povaiders/StoreProvaider';
import { getScrollSaveByPath, scrollActions } from '@/features/ScrollSave';
import ArrowUp from '@/shared/assets/icons/arrowUp.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { type TestProps } from '@/shared/types';
import { Button } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
   className?: string;
   scrollTrigger?: boolean;
   arrowUp?: boolean;
   children: ReactNode;
   onScrollEnd?: () => void;
   title?: string;
}

export const Page: FC<PageProps> = (props) => {
   const { className, children, onScrollEnd, title, scrollTrigger = false, arrowUp } = props;
   const { isMobile } = useMediaQueryValues();
   const scrollArrowUpOn = useRef(false);
   const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
   const dispatch = useAppDispatch();
   const { pathname } = useLocation();
   const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

   // const onScroll = (): void => {
   //   if (scrollTrigger) {
   //     dispatch(scrollActions.setScrollPosition({
   //       position: wrapperRef.current.scrollTop,
   //       path: pathname
   //     }))
   //   }
   // }

   const onScroll = useDebounce(() => {
      if (scrollTrigger) {
         dispatch(
            scrollActions.setScrollPosition({
               position: wrapperRef.current.scrollTop,
               path: pathname,
            }),
         );
         arrowUp && wrapperRef.current?.scrollTop > 200
            ? (scrollArrowUpOn.current = true)
            : (scrollArrowUpOn.current = false);
      }
   }, 400);

   const scrollUp = useCallback(() => {
      wrapperRef.current.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }, []);

   useInfinityScroll({
      triggerRef,
      wrapperRef,
      callback: onScrollEnd,
   });
   // прокрутка к позиции
   useInitialEffect(() => {
      wrapperRef.current.scrollTop = scrollPosition;
      // wrapperRef?.current.scrollTo({
      //    top: scrollPosition,
      //    behavior: 'smooth',
      // });
   });
   if (__PROJECT__ === 'storybook') {
      return (
         <section className={classNames(cls.Page, {}, [className])}>
            {title && <Text title={title} className={cls.title} size={TextFontSize.L} />}
            {children}
         </section>
      );
   }
   return (
      <section
         ref={wrapperRef}
         data-testid={props['data-testid'] ?? 'Page'}
         onScroll={onScroll}
         className={classNames(cls.Page, { [cls.mobile]: isMobile }, [className])}
      >
         <div className={cls.content}>
            {title && <Text title={title} className={cls.title} size={TextFontSize.L} />}
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}></div> : null}
            {arrowUp && (
               <Button
                  onClick={scrollUp}
                  circle
                  className={classNames(cls.arrowUp, { [cls.on]: scrollArrowUpOn.current }, [])}
               >
                  <Icon Svg={ArrowUp}></Icon>
               </Button>
            )}
         </div>
      </section>
   );
};
