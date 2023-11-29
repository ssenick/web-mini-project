import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DateIcon from 'shared/assets/icons/date.svg'
import ViewIcon from 'shared/assets/icons/view.svg'
import { RoutPath } from 'shared/config/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components /DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Text, TextAlign, TextFontSize } from 'shared/ui/Text/Text'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
  id: string
}
const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('articleDetails')
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)
  const navigate = useNavigate()
  const onBackToList = useCallback(() => {
    navigate(RoutPath.articles)
  }, [navigate])

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block?.type) {
      case ArticleBlockType.TEXT:
        return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}/>
        )
      case ArticleBlockType.IMAGE:
        return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}/>
        )
      case ArticleBlockType.CODE:
        return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}/>
        )
    }
  }, [])

  let content

  useInitialEffect(() => {
    void dispatch(fetchArticleById(id))
  })

  if (isLoading) {
    content = (
        <>
            <div className={cls.header}>
                <div className={cls.header__avatar}>
                    <Skeleton width={100} height={100} border={'50%'}/>
                </div>
                <div className={cls.header__content}>
                    <Skeleton className={cls.header__title} width={'38%'} height={40} border={'5px'}/>
                    <Skeleton className={cls.header__subtitle} width={'38%'} height={30} border={'5px'}/>
                    <div className={cls.header__block}>
                        <Skeleton className={cls.header__subtitle} width={'11%'} height={23} border={'5px'}/>
                    </div>
                    <div className={cls.header__block}>
                        <Skeleton className={cls.header__subtitle} width={'18%'} height={23} border={'5px'}/>
                    </div>
                </div>
            </div>
            <div className={cls.article}>
                <Skeleton className={cls.block} width={'100%'} height={100} border={'5px'}/>
                <Skeleton className={cls.block} width={'100%'} height={100} border={'5px'}/>
                <Skeleton className={cls.block} width={'100%'} height={100} border={'5px'}/>
                <Skeleton className={cls.block} width={'100%'} height={100} border={'5px'}/>
                <Skeleton className={cls.block} width={'100%'} height={100} border={'5px'}/>
            </div>
        </>
    )
  } else if (error) {
    content = (
        <Text
            size={TextFontSize.L}
            texAlign={TextAlign.CENTER}
            title={t('Статья не найдена')}
        />
    )
  } else {
    content = (
        <>
            <div className={cls.header}>
                <div className={cls.header__avatar}>
                    <Avatar size={120} className={cls.avatar} src={article?.img}/>
                </div>
                <div className={cls.header__content}>
                    <Text className={cls.header__title}
                          size={TextFontSize.XL}
                          title={article?.title}
                    />
                    <Text className={cls.header__subtitle} size={TextFontSize.XL} text={article?.subtitle}/>
                    <div className={cls.header__block}>
                        <Icon Svg={ViewIcon} className={cls.header__icon}/>
                        <Text
                            className={cls.header__info}
                            size={TextFontSize.L}
                            text={String(article?.views)}
                        />
                    </div>
                    <div className={cls.header__block}>
                        <Icon Svg={DateIcon} className={cls.header__icon}/>

                        <Text className={cls.header__info} size={TextFontSize.L} text={String(article?.createdAt)}/>
                    </div>
                </div>
            </div>
            <div className={cls.article}>
                {article?.blocks.map(renderBlock)}
            </div>
        </>

    )
  }
  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetails, {}, [className])}>
              <Button className={cls.btnBack} onClick={onBackToList} size={ButtonSize.XS} variant={ButtonVariant.BORDER}>{t('Назад к списку')}</Button>
              {content}
          </div>
      </DynamicModuleLoader>
  )
})
