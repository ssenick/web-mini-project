import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

import cls from './ErrorMessage.module.scss';

interface ErrorMessageProps {
   className?: string;
   title: string;
   description?: string;
   buttonContent: string;
   onClick: () => void;
}

export const ErrorMessage = memo((props: ErrorMessageProps): JSX.Element => {
   const { className, title, description, buttonContent, onClick } = props;
   return (
      <div className={classNames(cls.ErrorMessage, {}, [className])}>
         <div className={cls.container} data-text={title}>
            <div className={classNames(cls.title, {}, [cls.glitch])} data-text={title}>
               {title}
            </div>
            {description && (
               <div className={classNames(cls.description, {}, [cls.glitch])} data-text={description}>
                  {description}
               </div>
            )}
            <Button onClick={onClick} className={cls.btn} variant={ButtonVariant.BACKGROUND}>
               {buttonContent}
            </Button>
         </div>
      </div>
   );
});
