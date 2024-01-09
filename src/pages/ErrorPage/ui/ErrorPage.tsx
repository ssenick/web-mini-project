import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { VStack } from 'shared/ui/Stack'
import { ErrorMessage } from 'widgets/ErrorMessage'
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
  className?: string
}

export const ErrorPage = memo(({ className }: ErrorPageProps) => {
  const { t } = useTranslation()
  const reloadPage = useCallback(() => {
    location.reload()
  }, [])
  return (
      <VStack className={cls.ErrorPage}>
        <ErrorMessage
            title={t('упс')}
            description={t('что-то пошло не так')}
            buttonContent={t('обновить станицу')}
            onClick={reloadPage}/>
      </VStack>
  )
})
