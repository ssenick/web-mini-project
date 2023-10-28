import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectVariant } from 'shared/ui/Select/Select'
import { Currency } from '../../model/type/currency'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  value?: string
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.CAD, content: Currency.CAD },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.UAH, content: Currency.UAH }
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    readonly,
    value,
    onChange
  } = props
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
      <Select
          className={classNames('', {}, [className])}
          options={options}
          label={t('Валюта')}
          variant={SelectVariant.INVERSE_BG}
          readonly={readonly}
          onChange={onChangeHandler}
          value={value}
      />
  )
})
