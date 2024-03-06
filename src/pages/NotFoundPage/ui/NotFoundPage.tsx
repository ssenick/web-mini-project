import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'

import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation('notFound')
  return (
        <VStack data-testid={'NotFoundPage'} align={'center'} justify={'center'}
                className={classNames(cls.NotFoundPage, {}, [className])} >
            <VStack align={'center'} justify={'center'}
                className={cls.container} data-text='404'>
                <div className={classNames(cls.title, {}, [cls.glitch])} data-text='404'>404</div>
                <div className={classNames(cls.description, {}, [cls.glitch])} data-text={t('Страница не найдена')}>
                    {t('Страница не найдена')}
                </div>
            </VStack>
        </VStack>
  )
})
