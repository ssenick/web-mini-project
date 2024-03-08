import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
   const { t } = useTranslation('articleDetails');
   const { id } = useParams<{ id: string }>();

   if (__PROJECT__ === 'storybook') {
      return (
         <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={'1'} />
         </div>
      );
   }

   if (!id) {
      return (
         <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>
      );
   }

   return (
      <Page
         data-testid={'ArticleDetailsPage'}
         className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
         <div className={cls.wrapper}>
            <ArticleDetailsHeader />
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} />
            <ArticleRecommendationsList />
            <ArticleComments id={id} />
         </div>
      </Page>
   );
};
export default memo(ArticleDetailsPage);
