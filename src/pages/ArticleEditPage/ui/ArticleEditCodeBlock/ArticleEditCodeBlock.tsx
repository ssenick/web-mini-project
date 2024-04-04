import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleCodeBlock } from '@/entities/Article';
import IconImage from '@/shared/assets/icons/code.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { TextArea, TextAreaVariant } from '@/shared/ui/TextArea/TextArea';

import cls from './ArticleEditCodeBlock.module.scss';

interface ArticleEditCodeBlockProps {
   className?: string;
   block: ArticleCodeBlock;
   onUpdateCodeBlock: (updatedBlock: { id: string; updatedBlock: ArticleCodeBlock }) => void;
   onDeleteBlock: (id: string) => void;
}

export const ArticleEditCodeBlock = memo(
   ({ className, block, onUpdateCodeBlock, onDeleteBlock }: ArticleEditCodeBlockProps) => {
      const { t } = useTranslation('articleEdit');

      const onUpdateAlter = useCallback(
         (value: string) => {
            onUpdateCodeBlock({
               id: block.id,
               updatedBlock: {
                  ...block,
                  code: value,
               },
            });
         },
         [block, onUpdateCodeBlock],
      );

      const onDelete = useCallback(() => {
         onDeleteBlock(block.id);
      }, [block.id, onDeleteBlock]);

      return (
         <EditCard
            icon={IconImage}
            title={t('Блок с кодом')}
            className={classNames(cls.ArticleEditCodeBlock, {}, [className])}
            onClickBtn={onDelete}
         >
            <TextArea
               label={t('Код')}
               value={block.code}
               height={'220px'}
               variant={TextAreaVariant.INVERSE_BG}
               onChange={onUpdateAlter}
            />
         </EditCard>
      );
   },
);
