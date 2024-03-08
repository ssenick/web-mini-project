import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
   className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
   const { className } = props;
   const { t } = useTranslation();
   const { data, isLoading } = useGetNotificationsQuery(null, {
      pollingInterval: 10000,
   });
   if (isLoading) {
      return (
         <VStack gap={'15'} max className={classNames(cls.NotificationList, {}, [className])}>
            {new Array(2).fill(0).map((item, i) => (
               <Skeleton className={cls.skeleton} key={i} width={'100%'} border={'5px'} height={70} />
            ))}
         </VStack>
      );
   }

   return (
      <VStack gap={'15'} max className={classNames(cls.NotificationList, {}, [className])}>
         {data?.length ? (
            data?.map((item) => <NotificationItem key={item.id} item={item} />)
         ) : (
            <Text title={t('Нет уведомлений')} texAlign={TextAlign.CENTER} />
         )}
      </VStack>
   );
});
