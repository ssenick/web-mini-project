import { useTranslation } from 'react-i18next'

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('home')
  return (
        <div>
            {t('Заголовок страницы')}
        </div>
  )
}

export default HomePage
