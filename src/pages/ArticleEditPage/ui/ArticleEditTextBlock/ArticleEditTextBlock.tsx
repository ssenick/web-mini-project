import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleTextBlock } from '@/entities/Article';
import IconImage from '@/shared/assets/icons/txt-block.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';
import { TextFontSize } from '@/shared/ui/Text/Text';
import { TextArea, TextAreaVariant } from '@/shared/ui/TextArea/TextArea';

import cls from './ArticleEditTextBlock.module.scss';

interface ArticleEditTextBlockProps {
   className?: string;
   block: ArticleTextBlock;
}

export const ArticleEditTextBlock = memo(({ className, block }: ArticleEditTextBlockProps) => {
   const { t } = useTranslation('articleEdit');

   return (
      <EditCard
         icon={IconImage}
         title={t('Текстовый блок')}
         className={classNames(cls.ArticleEditTextBlock, {}, [className])}
      >
         {block.title && (
            <Input
               value={block.title}
               label={t('Заголовок')}
               labelSize={TextFontSize.SM}
               variant={InputVariant.INVERSE_BG}
            />
         )}
         {block.paragraphs.map((paragraph, i) => (
            // <Text key={i} text={paragraph} className={cls.paragraph} />
            <TextArea label={t('Параграф')} key={i} value={paragraph} variant={TextAreaVariant.INVERSE_BG} />
         ))}
         <HStack justify={'center'}>
            <Button variant={ButtonVariant.BACKGROUND} square size={ButtonSize.M}>
               +
            </Button>
         </HStack>
      </EditCard>
   );
});
