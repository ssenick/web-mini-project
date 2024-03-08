import { type User } from '@/entities/User';

import { type ArticleBlockType, type ArticleType } from '../consts/articleConsts';

interface ArticleBaseBlock {
   id: string;
   type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
   type: ArticleBlockType.TEXT;
   title?: string;
   paragraphs: string[];
}
export interface ArticleImageBlock extends ArticleBaseBlock {
   type: ArticleBlockType.IMAGE;
   src: string;
   title: string;
}
export interface ArticleCodeBlock extends ArticleBaseBlock {
   type: ArticleBlockType.CODE;
   code: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
   id: string;
   title: string;
   subtitle: string;
   img: string;
   views: number;
   createdAt: string;
   user: User;
   type: ArticleType[];
   blocks: ArticleBlock[];
}
