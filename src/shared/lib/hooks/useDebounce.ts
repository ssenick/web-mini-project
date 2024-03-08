import { useCallback, useEffect, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number): () => void {
   const timer = useRef<ReturnType<typeof setInterval> | null>(null);
   const debounceCallback = useCallback(() => {
      if (timer.current) {
         clearTimeout(timer.current);
      }
      timer.current = setTimeout((...args) => {
         // eslint-disable-next-line n/no-callback-literal
         callback(...args);
      }, delay);
   }, [callback, delay]);

   useEffect(() => {
      return () => {
         if (timer.current) {
            clearTimeout(timer.current);
         }
      };
   }, []);
   return debounceCallback;
}
