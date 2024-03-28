import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleImageBlock } from '@/entities/Article';
import IconImage from '@/shared/assets/icons/txt-block.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

import cls from './ArticleEditImageBlock.module.scss';

interface ArticleEditImageBlockProps {
   className?: string;
   block: ArticleImageBlock;
}

export const ArticleEditImageBlock = memo(({ className, block }: ArticleEditImageBlockProps) => {
   const { t } = useTranslation('articleEdit');

   return (
      <EditCard
         icon={IconImage}
         title={t('Блок изображения')}
         className={classNames(cls.ArticleEditImageBlock, {}, [className])}
      >
         <AppImage src={block.src} alt={block.title} className={cls.image} />
         {block.title && <Text title={block.title} texAlign={TextAlign.CENTER} />}
         <Input
            label={t('Ссылка на главное изображение')}
            value={block.src}
            variant={InputVariant.INVERSE_BG}
         />
         <Input label={t('Описание изображения')} value={block.title} variant={InputVariant.INVERSE_BG} />
      </EditCard>
   );
});
