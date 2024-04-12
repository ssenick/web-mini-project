import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
   type ArticleBlock,
   getNewArticleData,
   newArticleActions,
   newArticleReducer,
} from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import { AddBlock, ArticleBlockRender } from '@/features/ArticleUpdate';
import ErrorImage from '@/shared/assets/icons/errorImage.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { generateUniqueId } from '@/shared/lib/func/generateUniqueId';
import { getDate } from '@/shared/lib/func/getDate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { TextFontSize } from '@/shared/ui/Text/Text';

import cls from './ArticleCreateForm.module.scss';

interface ArticleCreateFormProps {
   className?: string;
}

const reducers: ReducersList = {
   newArticle: newArticleReducer,
};

export const ArticleCreateForm = memo(({ className }: ArticleCreateFormProps) => {
   const { t } = useTranslation('create');
   const data = useSelector(getNewArticleData);
   const userData = useSelector(getUserAuthData);
   const dispatch = useAppDispatch();
   console.log(userData);
   const onChangeTitle = useCallback(
      (value?: string) => {
         dispatch(newArticleActions.updateTitle(value || ''));
      },
      [dispatch],
   );

   const onChangeMainImage = useCallback(
      (value?: string) => {
         const newValue = value?.trim();
         dispatch(newArticleActions.updateMainImage(newValue || ''));
      },
      [dispatch],
   );

   const onChangeSubTitle = useCallback(
      (value?: string) => {
         dispatch(newArticleActions.updateSubTitle(value || ''));
      },
      [dispatch],
   );

   const addBlock = useCallback(
      (updatedBlocks: ArticleBlock[]) => {
         dispatch(newArticleActions.addBlock(updatedBlocks));
      },
      [dispatch],
   );

   const onDeleteBlock = useCallback(
      (id: string) => {
         dispatch(newArticleActions.deleteBlock(id));
      },
      [dispatch],
   );
   const onUpdateBlock = useCallback(
      (updatedData: { id: string; updatedBlock: ArticleBlock }) => {
         dispatch(newArticleActions.updateBlock(updatedData));
      },
      [dispatch],
   );

   useEffect(() => {
      dispatch(newArticleActions.updateId(generateUniqueId()));
      dispatch(newArticleActions.updateCreatedAt(getDate()));
      if (userData) {
         dispatch(newArticleActions.updateUser(userData));
      }
   }, [dispatch, userData]);

   return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
         <VStack gap={'25'} className={classNames(cls.ArticleCreateForm, {}, [className])}>
            <Card>
               <Input
                  onChange={onChangeTitle}
                  label={t('Заголовок записи блога')}
                  labelSize={TextFontSize.L}
                  value={data?.title || ''}
                  variant={InputVariant.INVERSE_BG}
                  width={100}
               />
            </Card>
            <Card>
               <div className={cls.image}>
                  <AppImage
                     className={cls.img}
                     src={data?.img || ''}
                     alt="Article image"
                     errorFallback={<Icon className={cls.img} Svg={ErrorImage} />}
                     fallback={<Skeleton className={cls.img} />}
                  />
               </div>
               <Input
                  onChange={onChangeMainImage}
                  className={cls.mainLink}
                  label={t('Ссылка на главное изображение')}
                  labelSize={TextFontSize.M}
                  value={data?.img || ''}
                  variant={InputVariant.INVERSE_BG}
               />
            </Card>
            <Card>
               <Input
                  onChange={onChangeSubTitle}
                  label={t('Подзаголовок')}
                  labelSize={TextFontSize.M}
                  value={data?.subtitle || ''}
                  variant={InputVariant.INVERSE_BG}
               />
            </Card>
            <VStack gap={'25'} className={cls.article}>
               {data?.blocks.map((block) => (
                  <ArticleBlockRender
                     key={block.id}
                     className={cls.block}
                     block={block}
                     onUpdateBlock={onUpdateBlock}
                     onDeleteBlock={onDeleteBlock}
                  />
               ))}
            </VStack>
            <AddBlock bgColor articlesBlocks={data?.blocks} addBlocks={addBlock} />
         </VStack>
      </DynamicModuleLoader>
   );
});
