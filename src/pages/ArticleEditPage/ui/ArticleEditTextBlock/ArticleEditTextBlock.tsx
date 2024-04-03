import { memo, useCallback } from 'react';
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
   onUpdateTextBlock: (updatedBlock: { id: string; updatedBlock: ArticleTextBlock }) => void;
}

export const ArticleEditTextBlock = memo(
   ({ className, block, onUpdateTextBlock }: ArticleEditTextBlockProps) => {
      const { t } = useTranslation('articleEdit');
      const onParagraphChange = useCallback(
         (index: number, value: string) => {
            const updatedParagraphs = [...block.paragraphs];
            updatedParagraphs[index] = value;
            onUpdateTextBlock({
               id: block.id,
               updatedBlock: {
                  ...block,
                  paragraphs: updatedParagraphs,
               },
            });
         },
         [block, onUpdateTextBlock],
      );

      const onUpdateTitle = useCallback(
         (value: string) => {
            onUpdateTextBlock({
               id: block.id,
               updatedBlock: {
                  ...block,
                  title: value,
               },
            });
         },
         [block, onUpdateTextBlock],
      );
      return (
         <EditCard
            icon={IconImage}
            title={t('Текстовый блок')}
            className={classNames(cls.ArticleEditTextBlock, {}, [className])}
         >
            {block.title && (
               <Input
                  onChange={onUpdateTitle}
                  value={block.title}
                  label={t('Заголовок')}
                  labelSize={TextFontSize.SM}
                  variant={InputVariant.INVERSE_BG}
               />
            )}
            {block.paragraphs.map((paragraph, i) => (
               // <Text key={i} text={paragraph} className={cls.paragraph} />
               <TextArea
                  onChange={(value) => {
                     onParagraphChange(i, value);
                  }}
                  label={t('Параграф')}
                  key={i}
                  value={paragraph}
                  variant={TextAreaVariant.INVERSE_BG}
               />
            ))}
            <HStack justify={'center'}>
               <Button variant={ButtonVariant.BACKGROUND} square size={ButtonSize.M}>
                  +
               </Button>
            </HStack>
         </EditCard>
      );
   },
);
