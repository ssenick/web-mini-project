import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getFaqSearch, useGetFaqListQuery } from '@/entities/FAQ';
import ArrowImage from '@/shared/assets/icons/arrow_down.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Spoiler } from '@/shared/ui/Spoiler/Spoiler';
import { Text, TextAlign, TextFontSize } from '@/shared/ui/Text/Text';
import { ErrorMessage } from '@/widgets/ErrorMessage';

import cls from './FaqList.module.scss';

interface FaqListProps {
   className?: string;
}

export const FaqList = memo(({ className }: FaqListProps) => {
   const { t } = useTranslation();
   const search = useSelector(getFaqSearch);
   const { error, isLoading, isFetching, data: faqList } = useGetFaqListQuery(search);

   const numberConversion = useCallback((value: string) => {
      const number = Number(value);
      if (!isNaN(number)) {
         return `${number < 10 ? '0' : ''}${number}.`;
      }
   }, []);
   if (isLoading || isFetching) {
      return (
         <div className={classNames(cls.FaqList, {}, [className])}>
            {new Array(8).fill(0).map((_, i) => (
               <Skeleton key={i} width={'100%'} height={'52px'} className={cls.item} />
            ))}
         </div>
      );
   }
   if (error) {
      return (
         <div className={classNames(cls.FaqList, {}, [className])}>
            <ErrorMessage title={t('упс')} description={t('что-то пошло не так')} />
         </div>
      );
   }
   return (
      <div className={classNames(cls.FaqList, {}, [className])}>
         {faqList?.map((item) => (
            <div key={item.id} className={cls.item}>
               <Spoiler
                  buttonWithMax
                  classNameActive={cls.active}
                  actionBlock={
                     <div className={cls.title}>
                        <span className={cls.number}>{numberConversion(item.id)}</span>
                        <Text className={cls.text} title={item.question} />
                        <div className={cls.icon}>
                           <Icon className={cls.arrow} Svg={ArrowImage} width={16} height={16} />
                        </div>
                     </div>
                  }
                  showBlock={<Text className={cls.body} text={item.answer} />}
               />
            </div>
         ))}
         {faqList && faqList.length < 1 && (
            <Text texAlign={TextAlign.CENTER} size={TextFontSize.L} title={t('Ничего не удалось найти')} />
         )}
      </div>
   );
});
