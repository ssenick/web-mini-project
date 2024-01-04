import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page'

const AboutPage = memo((): JSX.Element => {
  const { t } = useTranslation('about')
  const [value, setValue] = useState('')

  const inputOnChange = useCallback((val: string): void => {
    setValue(val)
  }, [])

  return (
        <Page>
            {t('Заголовок страницы')}
            <Input value={value} onChange={inputOnChange}/>
        </Page>
  )
})

export default AboutPage
