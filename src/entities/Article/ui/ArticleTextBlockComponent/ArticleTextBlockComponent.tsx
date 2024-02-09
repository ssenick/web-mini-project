import { memo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextFontSize } from '@/shared/ui/Text/Text'

import { type ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} size={TextFontSize.L} className={cls.title}/>}
            {block.paragraphs.map((paragraph, i) =>
                <Text key={i} text={paragraph} className={cls.paragraph}/>
            )}
        </div>
  )
})
