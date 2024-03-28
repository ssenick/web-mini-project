import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
   type ArticleBlock,
   ArticleBlockType,
   articleDetailsReducer,
   getArticleDetailsData,
   getArticleDetailsError,
   getArticleDetailsIsLoading,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
   DynamicModuleLoader,
   type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { TextFontSize } from '@/shared/ui/Text/Text';
import { ErrorMessage } from '@/widgets/ErrorMessage';
import { PageLoader } from '@/widgets/PageLoader';

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
export const ArticleEditContent = memo(({ className }: ArticleEditContentProps) => {
   const { t } = useTranslation('articleEdit');

   const article = useSelector(getArticleDetailsData);
   const isLoading = useSelector(getArticleDetailsIsLoading);
   const error = useSelector(getArticleDetailsError);

   const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block?.type) {
         case ArticleBlockType.TEXT:
            return <ArticleEditTextBlock key={block.id} className={cls.block} block={block} />;
         case ArticleBlockType.IMAGE:
            return <ArticleEditImageBlock key={block.id} className={cls.block} block={block} />;
         case ArticleBlockType.CODE:
            return <ArticleEditCodeBlock key={block.id} className={cls.block} block={block} />;
      }
   }, []);

   let content;

   if (isLoading) {
      content = <PageLoader className={cls.loader} />;
   } else if (error) {
      content = <ErrorMessage title={t('Статья не найдена')} />;
   } else if (article) {
      content = (
         <>
            <div className={cls.header}>
               <div className={cls.editBlock}>
                  <Input
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
                     label={t('Ссылка на главное изображение')}
                     labelSize={TextFontSize.M}
                     value={article?.img}
                     variant={InputVariant.INVERSE_BG}
                  />
               </div>
               <div className={cls.header__content}>
                  <div className={cls.editBlock}>
                     <Input
                        label={t('Подзаголовок')}
                        labelSize={TextFontSize.M}
                        value={article?.subtitle}
                        variant={InputVariant.INVERSE_BG}
                     />
                  </div>
               </div>
            </div>
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
