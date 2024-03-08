import { type MutableRefObject, useEffect } from 'react';

interface UseInfinityScrollOptions {
   callback?: () => void;
   triggerRef: MutableRefObject<HTMLElement>;
   wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinityScroll({ callback, triggerRef, wrapperRef }: UseInfinityScrollOptions): void {
   useEffect(() => {
      const wrapperElement = wrapperRef.current;
      const triggerElement = triggerRef.current;
      if (callback && wrapperElement && triggerElement) {
         const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
         };
         const observer = new IntersectionObserver(([entries]) => {
            if (entries.isIntersecting) {
               callback();
            }
         }, options);

         observer.observe(triggerElement);

         return () => {
            if (observer) {
               observer.unobserve(triggerElement);
            }
         };
      }
   }, [triggerRef, wrapperRef, callback]);
}
