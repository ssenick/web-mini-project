import { type HTMLAttributeAnchorTarget, memo, type ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextFontSize } from '@/shared/ui/Text/Text';

import { ArticleView } from '../../model/consts/articleConsts';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView;
   slider?: boolean;
   target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView): ReactNode =>
   new Array(view === ArticleView.BIG ? 4 : 9)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton view={view} key={index} />);

export const ArticleList = memo((props: ArticleListProps) => {
   const { t } = useTranslation('articles');
   const { className, articles, isLoading = true, view = ArticleView.BIG, slider, target } = props;
   const refList = useRef<HTMLDivElement>(null);
   return (
      <div
         ref={refList}
         className={classNames(cls.ArticleList, { [cls.slider]: slider }, [className, cls[view]])}
      >
         <div className={cls.articles}>
            {articles?.length > 0
               ? articles.map((article, index) => (
                    <ArticleListItem
                       className={cls.article}
                       index={index}
                       key={article.id}
                       article={article}
                       view={view}
                       target={target}
                    />
                 ))
               : null}

            {isLoading && getSkeletons(view)}
         </div>
         {!articles?.length && !isLoading && (
            <Text size={TextFontSize.L} texAlign={TextAlign.CENTER} title={t('Нет статей')} />
         )}
      </div>
   );
});
