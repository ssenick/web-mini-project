import { memo, useCallback } from 'react';

import { type ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { generateUniqueId } from '@/shared/lib/func/generateUniqueId';
import { Spoiler } from '@/shared/ui/Spoiler/Spoiler';

import { Blocks } from '../Blocks/Blocks';
import cls from '../styles/AddBlock.module.scss';

interface AddBlockProps {
   className?: string;
   articlesBlocks: ArticleBlock[];
   addBlocks: (updatedBlocks: ArticleBlock[]) => void;
}

export const AddBlock = memo(({ className, articlesBlocks, addBlocks }: AddBlockProps) => {
   console.log(articlesBlocks);

   const addTextBlock = useCallback(() => {
      addBlocks([
         ...articlesBlocks,
         {
            id: generateUniqueId(),
            type: ArticleBlockType.TEXT,
            title: '',
            paragraphs: [''],
         },
      ]);
   }, [addBlocks, articlesBlocks]);

   const addImageBlock = useCallback(() => {
      addBlocks([
         ...articlesBlocks,
         {
            id: generateUniqueId(),
            type: ArticleBlockType.IMAGE,
            title: '',
            src: '',
         },
      ]);
   }, [addBlocks, articlesBlocks]);
   const addCodeBlock = useCallback(() => {
      addBlocks([
         ...articlesBlocks,
         {
            id: generateUniqueId(),
            type: ArticleBlockType.CODE,
            code: '',
         },
      ]);
   }, [addBlocks, articlesBlocks]);

   const addNewBlock = useCallback(
      (id: ArticleBlockType) => {
         switch (id) {
            case ArticleBlockType.TEXT:
               addTextBlock();
               break;
            case ArticleBlockType.IMAGE:
               addImageBlock();
               break;
            case ArticleBlockType.CODE:
               addCodeBlock();
               break;
         }
      },
      [addCodeBlock, addImageBlock, addTextBlock],
   );

   return (
      <div className={classNames(cls.AddBlock, {}, [className])}>
         <Spoiler
            actionBlock={<div className={cls.btn}></div>}
            classNameActionBlock={cls.header}
            showBlock={<Blocks onClick={addNewBlock} />}
         />
      </div>
   );
});
