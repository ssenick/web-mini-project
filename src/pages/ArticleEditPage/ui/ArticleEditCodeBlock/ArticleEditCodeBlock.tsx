import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleCodeBlock } from '@/entities/Article';
import IconImage from '@/shared/assets/icons/txt-block.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { TextArea, TextAreaVariant } from '@/shared/ui/TextArea/TextArea';

import cls from './ArticleEditCodeBlock.module.scss';

interface ArticleEditCodeBlockProps {
   className?: string;
   block: ArticleCodeBlock;
}

export const ArticleEditCodeBlock = memo(({ className, block }: ArticleEditCodeBlockProps) => {
   const { t } = useTranslation('articleEdit');

   return (
      <EditCard
         icon={IconImage}
         title={t('Блок с кодом')}
         className={classNames(cls.ArticleEditCodeBlock, {}, [className])}
      >
         <TextArea
            label={t('Код')}
            value={block.code}
            height={'200px'}
            variant={TextAreaVariant.INVERSE_BG}
         />
      </EditCard>
   );
});
