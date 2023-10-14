import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ErrorPageProps {
  className?: string
}

const reloadPage = (): void => {
  location.reload()
}
export const ErrorPage = memo(({ className }: ErrorPageProps): JSX.Element => {
  const { t } = useTranslation()
  return (
          <div className={classNames(cls.ErrorPage, {}, [className])}>
              <div className={cls.container} data-text='Whoops!'>
                  <div className={classNames(cls.title, {}, [cls.glitch])} data-text={t('упс')}>{t('упс')}</div>
                  <div className={classNames(cls.description, {}, [cls.glitch])} data-text={t('что-то пошло не так')}>
                      {t('что-то пошло не так')}
                  </div>
                  <Button onClick={reloadPage} className={cls.btn} variant={ButtonVariant.BACKGROUND} >{t('обновить станицу')}</Button>
              </div>
          </div>
  )
})
