import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const HomePage = (): JSX.Element => {
  const { t } = useTranslation('home')
  return (
        <div>
            {t('Заголовок страницы')}
            <div>
                <Counter/>
            </div>
        </div>
  )
}

export default HomePage
