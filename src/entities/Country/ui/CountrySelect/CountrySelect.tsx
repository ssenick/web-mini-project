import { Country } from '../../model/type/country'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectVariant } from 'shared/ui/Select/Select'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Canada, content: Country.Canada },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Slovakia, content: Country.Slovakia }
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange
  } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
        <Select
            data-testid='country-select'
            className={classNames('', {}, [className])}
            options={options}
            label={t('Страна')}
            variant={SelectVariant.INVERSE_BG}
            readonly={readonly}
            onChange={onChangeHandler}
            value={value}
        />
  )
})
