import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation()
  return (
        <div className={classNames(cls.NotFoundPage, {}, [className])} >
            <div className={cls.container} data-text='404'>
                <div className={classNames(cls.title, {}, [cls.glitch])} data-text='404'>404</div>
                <div className={classNames(cls.description, {}, [cls.glitch])} data-text={t('Страница не найдена')}>
                    {t('Страница не найдена')}
                </div>
            </div>

        </div>
  )
}
