import { animated, config, useSpring } from '@react-spring/web';
import { memo, type ReactNode, useCallback, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useHeight } from '@/shared/lib/hooks/useHeight';

import cls from './Spoiler.module.scss';
interface SpoilerProps {
   classNameActionBlock?: string;
   actionBlock: ReactNode | 'string' | 'number';
   showBlock: ReactNode | 'string' | number;
   classNameShowBlock?: string;
}

export const Spoiler = memo((props: SpoilerProps) => {
   const { classNameActionBlock, actionBlock, showBlock, classNameShowBlock } = props;
   const [isShow, setIsShow] = useState(false);
   const [heightRef, height] = useHeight();

   const slideInStyles = useSpring({
      config: { ...config.stiff },
      from: { opacity: 0, height: 0 },
      to: {
         opacity: isShow ? 1 : 0,
         height: isShow ? height : 0,
      },
   });

   const onHandlerClick = useCallback(() => {
      setIsShow(!isShow);
   }, [isShow]);

   return (
      <>
         <div className={classNames('', { [cls.isShow]: isShow }, [classNameActionBlock])}>
            <button onClick={onHandlerClick}>{actionBlock}</button>
         </div>
         <animated.div style={{ ...slideInStyles, overflow: 'hidden' }}>
            <div className={classNameShowBlock} ref={heightRef}>
               {showBlock}
            </div>
         </animated.div>
      </>
   );
});
