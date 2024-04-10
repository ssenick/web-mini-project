import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { type ArticleTextBlock } from '@/entities/Article';
import CLoseImage from '@/shared/assets/icons/close.svg';
import IconImage from '@/shared/assets/icons/txt-block.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { EditCard } from '@/shared/ui/EditCard/EditCard';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Input, InputVariant } from '@/shared/ui/Input/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { TextFontSize } from '@/shared/ui/Text/Text';
import { TextArea, TextAreaVariant } from '@/shared/ui/TextArea/TextArea';

import cls from './ArticleEditTextBlock.module.scss';

interface ArticleEditTextBlockProps {
   className?: string;
   block: ArticleTextBlock;
   onUpdateTextBlock: (updatedBlock: { id: string; updatedBlock: ArticleTextBlock }) => void;
   onDeleteBlock: (id: string) => void;
}

export const ArticleEditTextBlock = memo((props: ArticleEditTextBlockProps) => {
   const { className, block, onUpdateTextBlock, onDeleteBlock } = props;
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

   const onDeleteEverything = useCallback(() => {
      onDeleteBlock(block.id);
   }, [block.id, onDeleteBlock]);

   const onDeleteParagraph = useCallback(
      (index: number) => () => {
         const updatedParagraphs = [...block.paragraphs].filter((_, i) => i !== index);
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

   const addNewParagraph = useCallback(() => {
      onUpdateTextBlock({
         id: block.id,
         updatedBlock: {
            ...block,
            paragraphs: [...block.paragraphs, ''],
         },
      });
   }, [block, onUpdateTextBlock]);

   return (
      <EditCard
         icon={IconImage}
         title={t('Текстовый блок')}
         className={classNames(cls.ArticleEditTextBlock, {}, [className])}
         onClickBtn={onDeleteEverything}
      >
         <Input
            className={cls.title}
            onChange={onUpdateTitle}
            value={block.title}
            label={t('Заголовок')}
            labelSize={TextFontSize.SXS}
            variant={InputVariant.INVERSE_BG}
         />
         <VStack gap={'15'} className={cls.blocks}>
            {block.paragraphs.map((paragraph, i) => (
               // <Text key={i} text={paragraph} className={cls.paragraph} />
               <div key={i} className={cls.block}>
                  <Button onClick={onDeleteParagraph(i)} square className={cls.closeBtn} size={ButtonSize.XS}>
                     <Icon width={'11px'} height={'11px'} Svg={CLoseImage} />
                  </Button>
                  <TextArea
                     onChange={(value) => {
                        onParagraphChange(i, value);
                     }}
                     height={'200px'}
                     label={t('Параграф')}
                     value={paragraph}
                     variant={TextAreaVariant.INVERSE_BG}
                  />
               </div>
            ))}
         </VStack>

         <HStack justify={'center'}>
            <Button variant={ButtonVariant.BACKGROUND} square size={ButtonSize.M} onClick={addNewParagraph}>
               +
            </Button>
         </HStack>
      </EditCard>
   );
});
