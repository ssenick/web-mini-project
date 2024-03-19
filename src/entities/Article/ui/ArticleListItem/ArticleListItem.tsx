import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorImage from '@/shared/assets/icons/errorImage.svg';
import IconEye from '@/shared/assets/icons/view.svg';
import { getRouteArticlesDetails } from '@/shared/config/routeConfig';
import { ARTICLE_LIST_ITEM_INDEX } from '@/shared/const/localstorage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text, TextFontSize } from '@/shared/ui/Text/Text';

import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { type Article, type ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
   className?: string;
   article: Article;
   view: ArticleView;
   target?: HTMLAttributeAnchorTarget;
   index?: number;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
   const { className, article, view, target, index } = props;

   const { t } = useTranslation();

   const setArticleIndex = useCallback(() => {
      sessionStorage.setItem(ARTICLE_LIST_ITEM_INDEX, JSON.stringify(index));
   }, [index]);

   // Rendering
   const types_component = (
      <Text className={cls.types} text={article.type.join(', ')} size={TextFontSize.SXS} />
   );
   const createdAt_component = (
      <Text className={cls.createAtt} text={article.createdAt} size={TextFontSize.XS} />
   );
   const errorImage = <Icon className={cls.image} Svg={ErrorImage} width={'100%'} height={'100%'} />;
   const imageBlock_component = (
      <div className={cls.imageBlock}>
         {/* <img className={cls.image} src={article.img} alt="article image"/> */}
         <AppImage
            className={cls.image}
            src={article.img}
            alt={'article image'}
            fallback={<Skeleton className={cls.image} width={'100%'} height={'100%'} />}
            errorFallback={errorImage}
         />
      </div>
   );
   const views = (
      <div className={cls.viewWrapper}>
         <Text className={cls.view} text={String(article.views)} size={TextFontSize.SXS} />
         <Icon className={cls.icon} Svg={IconEye} />
      </div>
   );

   if (view === ArticleView.BIG) {
      const firstTextBlock = article.blocks.find(
         (block) => block.type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
         <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.header}>
               <div className={cls.about}>
                  <div className={cls.user}>
                     <Avatar src={article.user.avatar} size={30} alt="User avatar" />
                     <Text text={article.user.username} size={TextFontSize.XS} />
                  </div>
                  <Text className={cls.title} title={article.title} size={TextFontSize.L} />
                  {types_component}
               </div>
               {createdAt_component}
            </div>
            {imageBlock_component}
            <div className={cls.content}>
               {firstTextBlock && <ArticleTextBlockComponent block={firstTextBlock} className={cls.text} />}
            </div>
            <div className={cls.bottom}>
               <AppLink onClick={setArticleIndex} to={getRouteArticlesDetails(article.id)} target={target}>
                  <Button size={ButtonSize.M} variant={ButtonVariant.BORDER}>
                     {t('Читать далее')}
                  </Button>
               </AppLink>
               {views}
            </div>
         </article>
      );
   }

   return (
      <AppLink
         onClick={setArticleIndex}
         to={getRouteArticlesDetails(article.id)}
         target={target}
         className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
         <div className={cls.imageBlock}>
            {/* <img className={cls.image} src={article.img} alt="article image"/> */}
            <AppImage
               className={cls.image}
               src={article.img}
               alt={'article image'}
               errorFallback={errorImage}
               fallback={<Skeleton className={cls.image} width={'100%'} height={'100%'} />}
            />
            <Text className={cls.createAtt} text={article.createdAt} size={TextFontSize.XS} />
         </div>
         <div className={cls.info}>
            <Text className={cls.types} text={article.type.join(', ')} size={TextFontSize.SXS} />
            <div className={cls.viewWrapper}>
               <Text className={cls.view} text={String(article.views)} size={TextFontSize.SXS} />
               <Icon className={cls.icon} Svg={IconEye} />
            </div>
         </div>
         <Text title={article.title} className={cls.title} />
      </AppLink>
   );
});
