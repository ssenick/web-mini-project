import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import IconEye from 'shared/assets/icons/view.svg'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view
  } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  // functional
  const onOpenArticle = useCallback(() => {
    navigate(RoutPath.articles_details + article.id)
  }, [navigate, article.id])

  // Rendering
  const types_component = <Text className={cls.types} text={article.type.join(', ')} size={TextFontSize.SXS}/>
  const createdAt_component = <Text className={cls.createAtt} text={article.createdAt} size={TextFontSize.XS} />
  const imageBlock_component = (
      <div className={cls.imageBlock}>
          <img className={cls.image} src={article.img} alt="article image"/>
      </div>
  )
  const views = (
        <div className={cls.viewWrapper}>
            <Text className={cls.view} text={String(article.views)} size={TextFontSize.SXS}/>
            <Icon className={cls.icon} Svg={IconEye}/>
        </div>
  )

  if (view === ArticleView.BIG) {
    const firstTextBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
        <article className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.header}>
                <div className={cls.about}>
                    <div className={cls.user}>
                        <Avatar src={article.user.avatar} size={30} alt='User avatar'/>
                        <Text text={article.user.username} size={TextFontSize.XS} />
                    </div>
                    <Text className={cls.title} title={article.title} size={TextFontSize.L}/>
                    {types_component}
                </div>
                {createdAt_component}
            </div>
            {imageBlock_component}
            <div className={cls.content}>
                {firstTextBlock &&
                    <ArticleTextBlockComponent block={firstTextBlock} className={cls.text}/>
                }
            </div>
            <div className={cls.bottom}>
                <Button
                    onClick={onOpenArticle}
                    size={ButtonSize.M}
                    variant={ButtonVariant.BORDER}
                >{t('Читать далее')}</Button>
                {views}
            </div>
        </article>
    )
  }

  return (
        <article onClick={onOpenArticle} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
          <div className={cls.imageBlock}>
            <img className={cls.image} src={article.img} alt="article image"/>
            <Text className={cls.createAtt} text={article.createdAt} size={TextFontSize.XS} />
          </div>
          <div className={cls.info}>
            <Text className={cls.types} text={article.type.join(', ')} size={TextFontSize.SXS}/>
              <div className={cls.viewWrapper}>
                  <Text className={cls.view} text={String(article.views)} size={TextFontSize.SXS}/>
                  <Icon className={cls.icon} Svg={IconEye}/>
              </div>
          </div>
          <Text title={article.title} className={cls.title} />
        </article>
  )
})
