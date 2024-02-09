import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ListBox } from '@/shared/ui/ListBox/ListBox'

import { Currency } from '../../model/consts/currencyConsts'

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
      <ListBox
          className={className}
          onChange={onChangeHandler}
          value={value}
          label={t('Валюта')}
          items={options}
          readonly={readonly}
      />
      // <Select
      //     className={classNames('', {}, [className])}
      //     options={options}
      //     label={t('Валюта')}
      //     variant={SelectVariant.INVERSE_BG}
      //     readonly={readonly}
      //     onChange={onChangeHandler}
      //     value={value}
      // />
  )
})
