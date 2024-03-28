import { type FC, memo, type ReactNode, type SVGProps } from 'react';

import CLoseImage from '@/shared/assets/icons/close.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';
import { Text } from '../Text/Text';
import cls from './EditCard.module.scss';
interface EditCardProps {
   className?: string;
   children?: ReactNode;
   icon: FC<SVGProps<SVGElement>>;
   title: string;
}

export const EditCard = memo(({ className, children, icon, title }: EditCardProps) => {
   return (
      <div className={classNames(cls.EditCard, {}, [className])}>
         <HStack justify={'between'} gap={'15'} className={cls.header}>
            <HStack gap={'15'} className={cls.info}>
               <Icon mainColor Svg={icon} />
               <Text title={title} />
            </HStack>
            <HStack className={cls.action}>
               <Button withIcon className={cls.closeBtn}>
                  <Icon Svg={CLoseImage} />
               </Button>
            </HStack>
         </HStack>
         <div className={cls.content}>{children}</div>
      </div>
   );
});
