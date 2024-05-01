import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';

import cls from './InfoMassage.module.scss';

interface InfoMassageProps {
   className?: string;
}

export const InfoMassage = memo(({ className }: InfoMassageProps) => {
   const { t } = useTranslation();
   return (
      <div className={classNames(cls.InfoMassage, {}, [className])}>
         <Text className={cls.item} title={t('User name')} size={TextFontSize.L} />
         <Text className={cls.item} title={t('Password')} size={TextFontSize.L} />
         <Text className={cls.item} title="admin" />
         <Text className={cls.item} title="123" />
         <Text className={cls.item} title="user" />
         <Text className={cls.item} title="123" />
         <Text className={cls.item} title="manager" />
         <Text className={cls.item} title="123" />
      </div>
   );
});
