import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType } from '@/entities/Article';
import IconCode from '@/shared/assets/icons/code.svg';
import IconImage from '@/shared/assets/icons/image.svg';
import IconText from '@/shared/assets/icons/txt-block.svg';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from '../styles/AddBlock.module.scss';

interface BlocksProps {
   onClick: (id: ArticleBlockType) => void;
}

export const Blocks = memo(({ onClick }: BlocksProps) => {
   const { t } = useTranslation();
   const blocks = useMemo(
      () => [
         {
            id: ArticleBlockType.TEXT,
            title: t('Текстовый блок'),
            icon: IconText,
         },
         {
            id: ArticleBlockType.IMAGE,
            title: t('Блок с изображением'),
            icon: IconImage,
         },
         {
            id: ArticleBlockType.CODE,
            title: t('Блок с кодом'),
            icon: IconCode,
         },
      ],
      [t],
   );

   const handleBlockClick = useCallback(
      (blockId: ArticleBlockType) => () => {
         onClick(blockId);
      },
      [onClick],
   );

   return (
      <div className={cls.blocks}>
         {blocks.map((block) => (
            <Button
               onClick={handleBlockClick(block.id)}
               withIcon
               key={block.id}
               variant={ButtonVariant.BACKGROUND}
               className={cls.block}
            >
               <Icon Svg={block.icon} />
               {block.title}
            </Button>
         ))}
      </div>
   );
});
