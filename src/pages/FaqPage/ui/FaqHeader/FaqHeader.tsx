import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { faqActions, getFaqSearch } from '@/entities/FAQ';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';

interface FaqHeaderProps {
   className?: string;
}

export const FaqHeader = memo(({ className }: FaqHeaderProps) => {
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const search = useSelector(getFaqSearch);
   const [value, setValue] = useState(search || '');
   const debounceFetchData = useDebounce(() => {
      dispatch(faqActions.setSearch(value));
   }, 500);

   useEffect(() => {
      debounceFetchData();
   }, [value, debounceFetchData]);

   const onChangeSearch = (search: string): void => {
      setValue(search);
   };

   return (
      <VStack gap={'20'} className={classNames('', {}, [className])}>
         <Text title={t('ЧЗВ')} size={TextFontSize.XL} />
         <Input
            value={value}
            onChange={onChangeSearch}
            placeholder={t('Поиск по ЧЗВ')}
            variant={InputVariant.INVERSE_BG}
         />
      </VStack>
   );
});
