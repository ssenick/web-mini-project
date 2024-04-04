import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleImageBlock } from '@/entities/Article';
import IconImage from '@/shared/assets/icons/image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import cls from './ArticleEditImageBlock.module.scss';

interface ArticleEditImageBlockProps {
   className?: string;
   block: ArticleImageBlock;
   onUpdateImageBlock: (updatedBlock: { id: string; updatedBlock: ArticleImageBlock }) => void;
   onDeleteBlock: (id: string) => void;
}

export const ArticleEditImageBlock = memo(
   ({ className, block, onUpdateImageBlock, onDeleteBlock }: ArticleEditImageBlockProps) => {
      const { t } = useTranslation('articleEdit');

      const onUpdateSrc = useCallback(
         (value: string) => {
            const newValue = value.trim();
            onUpdateImageBlock({
               id: block.id,
               updatedBlock: {
                  ...block,
                  src: newValue,
               },
            });
         },
         [block, onUpdateImageBlock],
      );
      const onUpdateAlter = useCallback(
         (value: string) => {
            onUpdateImageBlock({
               id: block.id,
               updatedBlock: {
                  ...block,
                  title: value,
               },
            });
         },
         [block, onUpdateImageBlock],
      );

      const onDelete = useCallback(() => {
         onDeleteBlock(block.id);
      }, [block.id, onDeleteBlock]);

      return (
         <EditCard
            icon={IconImage}
            title={t('Блок изображения')}
            className={classNames(cls.ArticleEditImageBlock, {}, [className])}
            onClickBtn={onDelete}
         >
            <AppImage src={block.src} alt={block.title} className={cls.image} />
            {block.title && <Text title={block.title} texAlign={TextAlign.CENTER} />}
            <Input
               onChange={onUpdateSrc}
               label={t('Ссылка на главное изображение')}
               value={block.src}
               variant={InputVariant.INVERSE_BG}
            />
            <Input
               label={t('Описание изображения')}
               value={block.title}
               variant={InputVariant.INVERSE_BG}
               onChange={onUpdateAlter}
            />
         </EditCard>
      );
   },
);
