import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
   type ArticleBlock,
   ArticleBlockType,
   articleDetailsReducer,
   fetchArticleById,
   getArticleDetailsError,
   getArticleDetailsForms,
   getArticleDetailsIsLoading,
} from '@/entities/Article';
import { articleDetailsActions } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { TextFontSize } from '@/shared/ui/Text/Text';
import { ErrorMessage } from '@/widgets/ErrorMessage';

import { ArticleEditCodeBlock } from '../ArticleEditCodeBlock/ArticleEditCodeBlock';
import { ArticleEditImageBlock } from '../ArticleEditImageBlock/ArticleEditImageBlock';
import { ArticleEditTextBlock } from '../ArticleEditTextBlock/ArticleEditTextBlock';
import cls from './ArticleEditContent.module.scss';

interface ArticleEditContentProps {
   className?: string;
   id?: string;
}
const reducers: ReducersList = {
   articleDetails: articleDetailsReducer,
};
export const ArticleEditContent = memo(({ className, id }: ArticleEditContentProps) => {
   const { t } = useTranslation('articleEdit');
   const dispatch = useAppDispatch();
   const article = useSelector(getArticleDetailsForms);
   const isLoading = useSelector(getArticleDetailsIsLoading);
   const error = useSelector(getArticleDetailsError);

   // useInitialEffect(() => {
   //    if (id) void dispatch(fetchArticleById(id));
   // });

   useEffect(() => {
      if (id) void dispatch(fetchArticleById(id));
   }, [id, dispatch]);

   const onChangeTitle = useCallback(
      (value?: string) => {
         dispatch(articleDetailsActions.updateTitle(value || ''));
      },
      [dispatch],
   );

   const onChangeMainImage = useCallback(
      (value?: string) => {
         const newValue = value?.trim();
         dispatch(articleDetailsActions.updateMainImage(newValue || ''));
      },
      [dispatch],
   );

   const onChangeSubTitle = useCallback(
      (value?: string) => {
         dispatch(articleDetailsActions.updateSubTitle(value || ''));
      },
      [dispatch],
   );

   const onUpdateBlock = useCallback(
      (updatedData: { id: string; updatedBlock: ArticleBlock }) => {
         dispatch(articleDetailsActions.updateBlock(updatedData));
      },
      [dispatch],
   );

   const onDeleteBlock = useCallback(
      (id: string) => {
         dispatch(articleDetailsActions.deleteBlock(id));
      },
      [dispatch],
   );

   const renderBlock = useCallback(
      (block: ArticleBlock) => {
         switch (block?.type) {
            case ArticleBlockType.TEXT:
               return (
                  <ArticleEditTextBlock
                     key={block.id}
                     className={cls.block}
                     block={block}
                     onUpdateTextBlock={onUpdateBlock}
                     onDeleteBlock={onDeleteBlock}
                  />
               );
            case ArticleBlockType.IMAGE:
               return (
                  <ArticleEditImageBlock
                     key={block.id}
                     className={cls.block}
                     block={block}
                     onUpdateImageBlock={onUpdateBlock}
                     onDeleteBlock={onDeleteBlock}
                  />
               );
            case ArticleBlockType.CODE:
               return (
                  <ArticleEditCodeBlock
                     key={block.id}
                     className={cls.block}
                     block={block}
                     onUpdateCodeBlock={onUpdateBlock}
                     onDeleteBlock={onDeleteBlock}
                  />
               );
         }
      },
      [onDeleteBlock, onUpdateBlock],
   );

   let content;

   if (isLoading) {
      content = (
         <>
            <VStack gap={'15'} className={cls.header}>
               <div className={cls.editBlock}>
                  <Skeleton className={cls.header__title} width={'100%'} height={72} border={'5px'} />
               </div>
               <div className={cls.editBlock}>
                  <div className={cls.header__image}>
                     <Skeleton className={cls.header__img} width={'100%'} height={'100%'} border={'5px'} />
                  </div>
                  <Skeleton width={'100%'} height={64} border={'5px'} />
               </div>
               <div className={cls.header__content}>
                  <div className={cls.editBlock}>
                     <Skeleton width={'100%'} height={64} border={'5px'} />
                  </div>
               </div>
            </VStack>
            <div className={cls.article}>
               <Skeleton className={cls.block} width={'100%'} height={200} border={'5px'} />
               <Skeleton className={cls.block} width={'100%'} height={200} border={'5px'} />
               <Skeleton className={cls.block} width={'100%'} height={200} border={'5px'} />
               <Skeleton className={cls.block} width={'100%'} height={200} border={'5px'} />
               <Skeleton className={cls.block} width={'100%'} height={200} border={'5px'} />
            </div>
         </>
      );
   } else if (error) {
      content = <ErrorMessage title={t('Статья не найдена')} />;
   } else if (article) {
      content = (
         <>
            <VStack gap={'15'} className={cls.header}>
               <div className={cls.editBlock}>
                  <Input
                     onChange={onChangeTitle}
                     label={t('Заголовок записи блога')}
                     labelSize={TextFontSize.L}
                     value={article?.title}
                     variant={InputVariant.INVERSE_BG}
                     width={100}
                  />
               </div>
               <div className={cls.editBlock}>
                  <div className={cls.header__image}>
                     {/* <img className={cls.header__img} src={article?.img} alt="Article image" /> */}
                     <AppImage
                        className={cls.header__img}
                        src={article?.img}
                        alt="Article image"
                        fallback={<Skeleton className={cls.header__img} />}
                     />
                  </div>
                  <Input
                     className={cls.mainLink}
                     onChange={onChangeMainImage}
                     label={t('Ссылка на главное изображение')}
                     labelSize={TextFontSize.M}
                     value={article?.img}
                     variant={InputVariant.INVERSE_BG}
                  />
               </div>
               <div className={cls.header__content}>
                  <div className={cls.editBlock}>
                     <Input
                        onChange={onChangeSubTitle}
                        label={t('Подзаголовок')}
                        labelSize={TextFontSize.M}
                        value={article?.subtitle}
                        variant={InputVariant.INVERSE_BG}
                     />
                  </div>
               </div>
            </VStack>
            <div className={cls.article}>{article?.blocks.map(renderBlock)}</div>
         </>
      );
   }
   return (
      <div className={classNames(cls.ArticleEditContent, {}, [className])}>
         <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {content}
         </DynamicModuleLoader>
      </div>
   );
});
