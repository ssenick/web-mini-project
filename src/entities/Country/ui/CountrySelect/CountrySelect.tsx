import { ListBox } from 'shared/ui/ListBox/ListBox'
import { Country } from '../../model/type/country'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

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
      <ListBox
          data-testid='country-select'
          className={className}
          onChange={onChangeHandler}
          value={value}
          label={t('Страна')}
          items={options}
          readonly={readonly}
      />
  )

  // return (
  //       <Select
  //           data-testid='country-select'
  //           className={classNames('', {}, [className])}
  //           options={options}
  //           label={t('Страна')}
  //           variant={SelectVariant.INVERSE_BG}
  //           readonly={readonly}
  //           onChange={onChangeHandler}
  //           value={value}
  //       />
  // )
})
