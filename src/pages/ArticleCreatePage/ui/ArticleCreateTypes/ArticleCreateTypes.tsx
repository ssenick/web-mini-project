import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType, newArticleActions } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';

import cls from './ArticleCreateTypes.module.scss';

interface ArticleCreateTypesProps {
   className?: string;
}

const typeOptions = [
   { id: ArticleType.IT, content: ArticleType.IT },
   { id: ArticleType.SCIENCE, content: ArticleType.SCIENCE },
   { id: ArticleType.ECONOMICS, content: ArticleType.ECONOMICS },
];

export const ArticleCreateTypes = memo(({ className }: ArticleCreateTypesProps) => {
   const { t } = useTranslation('create');
   const dispatch = useAppDispatch();

   const [selectedTypes, setSelectedTypes] = useState<string[]>([ArticleType.IT]);

   // const toggleSelectedType = useCallback(
   //    (typeId: string) => () => {
   //       setSelectedTypes((prev) => {
   //          const changedTypes = prev.includes(typeId)
   //             ? prev.filter((id) => id !== typeId)
   //             : [...prev, typeId];
   //          dispatch(newArticleActions.updateType(changedTypes as ArticleType[]));
   //          return changedTypes;
   //       });
   //    },
   //    [dispatch],
   // );

   const toggleSelectedType = useCallback(
      (typeId: string) => () => {
         const changedTypes = selectedTypes.includes(typeId)
            ? selectedTypes.filter((id) => id !== typeId)
            : [...selectedTypes, typeId];

         // Проверяем, остался ли хотя бы один выбранный тип
         if (changedTypes.length >= 1) {
            setSelectedTypes(changedTypes);
            dispatch(newArticleActions.updateType(changedTypes as ArticleType[]));
         }
      },
      [selectedTypes, dispatch],
   );

   return (
      <Card>
         <VStack gap={'10'}>
            <Text title={t('Тема статьи')} size={TextFontSize.L} />
            <div className={classNames(cls.ArticleCreateTypes, {}, [className])}>
               {typeOptions.map((type) => (
                  <Button
                     key={type.id}
                     variant={
                        selectedTypes.includes(type.id) ? ButtonVariant.BACKGROUND : ButtonVariant.BORDER
                     }
                     onClick={toggleSelectedType(type.id)}
                  >
                     {type.content}
                  </Button>
               ))}
            </div>
         </VStack>
      </Card>
   );
});
