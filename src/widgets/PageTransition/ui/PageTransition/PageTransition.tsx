import { AnimatePresence, motion } from 'framer-motion';
import { type Location } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageTransition.module.scss';

interface PageTransitionProps {
   className?: string;
   location: Location;
   children?: JSX.Element;
}

const transitionVariants = {
   initial: {
      opacity: 1,
   },
   animate: {
      opacity: 0,
   },
   exit: {
      opacity: 1,
   },
};

export const PageTransition = ({ className, location, children }: PageTransitionProps): JSX.Element => {
   return (
      <AnimatePresence mode="wait">
         <motion.div key={location.pathname} className={classNames(cls.PageTransition, {}, [className])}>
            {children}
            <motion.div
               className={cls.one}
               variants={transitionVariants}
               initial="initial"
               animate="animate"
               exit="exit"
               // transition={{ delay: 0, duration: 0.3, ease: 'easeInOut' }}
            ></motion.div>
         </motion.div>
      </AnimatePresence>
   );
};
