import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { type ReactNode, useCallback, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
   className?: string;
   children?: ReactNode;
   isOpen?: boolean;
   onClose?: () => void;
   lazy?: boolean;
}

const height = window.innerHeight * 0.9;
export const Drawer = (props: DrawerProps): JSX.Element | null => {
   const { className, children, isOpen, onClose } = props;
   // const { Spring, Gesture } = useAnimationLibs()
   const [{ y }, api] = useSpring(() => ({ y: height }));

   const openDrawer = useCallback(() => {
      api.start({ y: 0, immediate: false });
   }, [api]);

   const closeDrawer = (velocity = 0): void => {
      api.start({
         y: height,
         immediate: false,
         config: { ...config.stiff, velocity },
         onResolve: onClose,
      });
   };

   const bind = useDrag(
      ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
         if (my < -70) cancel();

         if (last) {
            if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
               closeDrawer();
            } else {
               openDrawer();
            }
         } else {
            api.start({ y: my, immediate: true });
         }
      },
      {
         from: () => [0, y.get()],
         filterTaps: true,
         bounds: { top: 0 },
         rubberband: true,
      },
   );
   useEffect(() => {
      if (isOpen) openDrawer();
   }, [api, isOpen, openDrawer]);

   if (!isOpen) return null;

   const display = y.to((py) => (py < height ? 'block' : 'none'));
   const bgStyle = {
      opacity: y.to([0, height], [1, 0], 'clamp'),
   };
   return (
      <Portal>
         <div className={classNames(cls.Drawer, {}, [className])}>
            <a.div className={cls.overlay} style={bgStyle}>
               <a.div
                  className={cls.wrapper}
                  {...bind()}
                  style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}
               >
                  <div className={cls.content}>{children}</div>
               </a.div>
            </a.div>
         </div>
      </Portal>
   );
};
// const DrawerAsync = (props: DrawerProps): JSX.Element | null => {
//   const { isLoaded } = useAnimationLibs()
//
//   if (!isLoaded) {
//     return null
//   }
//
//   return <DrawerContent {...props} />
// }
//
// export const Drawer = (props: DrawerProps): JSX.Element => {
//   return (
//       <AnimationProvider>
//         <DrawerAsync {...props} />
//       </AnimationProvider>
//   )
// }
