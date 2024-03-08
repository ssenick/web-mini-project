import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/bi_list.svg';
import TiledIcon from '@/shared/assets/icons/fe_tiled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './ViewSelector.module.scss';

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticleView;
   onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
   {
      view: ArticleView.SMALL,
      icon: TiledIcon,
   },
   {
      view: ArticleView.BIG,
      icon: ListIcon,
   },
];

interface ArticleViewSelectorProps {
   className?: string;
}

export const ViewSelector = memo((props: ArticleViewSelectorProps) => {
   const { className, view, onViewClick } = props;

   const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
   };

   return (
      <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
         {viewTypes.map((viewType) => (
            <Button
               key={viewType.view}
               onClick={onClick(viewType.view)}
               square={true}
               size={ButtonSize.SM}
               className={classNames(cls.button, { [cls.selected]: viewType.view === view }, [])}
            >
               {<Icon Svg={viewType.icon} />}
            </Button>
         ))}
      </div>
   );
});
