import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Input } from 'shared/ui/Input/Input'

const AboutPage = memo((): JSX.Element => {
  const { t } = useTranslation('about')
  const [value, setValue] = useState('')

  const inputOnChange = useCallback((val: string): void => {
    setValue(val)
  }, [])
  return (
        <div>
            {t('Заголовок страницы')}
            <Input value={value} onChange={inputOnChange}/>
        </div>
  )
})

export default AboutPage
