import { type ArticleBlock, ArticleBlockType } from '@/entities/Article';

import { ArticleEditCodeBlock } from '../ArticleEditCodeBlock/ArticleEditCodeBlock';
import { ArticleEditImageBlock } from '../ArticleEditImageBlock/ArticleEditImageBlock';
import { ArticleEditTextBlock } from '../ArticleEditTextBlock/ArticleEditTextBlock';

interface ArticleBlockRenderProps {
   className: string;
   block: ArticleBlock;
   onUpdateBlock: (updatedBlock: { id: string; updatedBlock: ArticleBlock }) => void;
   onDeleteBlock: (id: string) => void;
}

export const ArticleBlockRender = (props: ArticleBlockRenderProps): JSX.Element => {
   const { className, block, onUpdateBlock, onDeleteBlock } = props;
   switch (block?.type) {
      case ArticleBlockType.TEXT:
         return (
            <ArticleEditTextBlock
               key={block.id}
               className={className}
               block={block}
               onUpdateTextBlock={onUpdateBlock}
               onDeleteBlock={onDeleteBlock}
            />
         );
      case ArticleBlockType.IMAGE:
         return (
            <ArticleEditImageBlock
               key={block.id}
               className={className}
               block={block}
               onUpdateImageBlock={onUpdateBlock}
               onDeleteBlock={onDeleteBlock}
            />
         );
      case ArticleBlockType.CODE:
         return (
            <ArticleEditCodeBlock
               key={block.id}
               className={className}
               block={block}
               onUpdateCodeBlock={onUpdateBlock}
               onDeleteBlock={onDeleteBlock}
            />
         );
   }
};
