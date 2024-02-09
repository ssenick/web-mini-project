import { type ChangeEvent, useMemo } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import { Text, TextFontSize } from '../Text/Text'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}
export enum SelectVariant {
  NORMAL = 'clear',
  INVERSE_BG = 'inverse-bg'
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  value?: string
  options?: Array<SelectOption<T>>
  readonly?: boolean
  variant?: SelectVariant
  onChange?: (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>): JSX.Element => {
  const {
    className,
    label,
    value,
    readonly,
    options,
    variant = SelectVariant.NORMAL,
    onChange
  } = props
  const optionsList = useMemo(() =>
    options?.map(opt => (
          <option
              key={opt.value}
              className={cls.option}
              value={opt.value}>{opt.content}</option>
    )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) onChange(e.target.value as T)
  }

  return (
        <div className={classNames(cls.Select, {}, [className, cls[variant]])}>
            {label && <Text className={cls.label} size={TextFontSize.SXS} title={label}/>}
            <select onChange={onChangeHandler} disabled={readonly} className={cls.select} value={value}>
                {optionsList}
            </select>
        </div>
  )
}
