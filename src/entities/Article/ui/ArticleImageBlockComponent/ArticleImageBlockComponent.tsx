import { memo } from 'react'

import ErrorImage from '@/shared/assets/icons/errorImage.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage/AppImage'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Text, TextAlign } from '@/shared/ui/Text/Text'

import { type ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const errorImage = <Icon className={cls.image} Svg={ErrorImage} style={{ maxWidth: '400px' }} />
  return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <AppImage
                src={block.src}
                alt={block.title}
                className={cls.image}
                fallback={<Skeleton width={'100%'} height={'100%'}/>}
                errorFallback={errorImage}
            />
            {block.title && <Text title={block.title} texAlign={TextAlign.CENTER}/>}
        </div>
  )
})
