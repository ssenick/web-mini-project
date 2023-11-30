import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'
import { memo } from 'react'
import { Page } from 'widgets/Page'

const HomePage = memo((): JSX.Element => {
  const { t } = useTranslation('home')
  return (
        <Page>
            {t('Заголовок страницы')}
            <div >
                <Counter/>
            </div>
        </Page>
  )
})

export default HomePage
