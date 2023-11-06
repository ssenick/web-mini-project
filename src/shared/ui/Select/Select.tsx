import { type ChangeEvent, memo, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}
export enum SelectVariant {
  NORMAL = 'clear',
  INVERSE_BG = 'inverse-bg'
}

interface SelectProps {
  className?: string
  label?: string
  value?: string
  options?: SelectOption[]
  readonly?: boolean
  variant?: SelectVariant
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
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
    if (onChange) onChange(e.target.value)
  }

  return (
        <div className={classNames(cls.Select, {}, [className, cls[variant]])}>
            {label && <Text className={cls.label} size={TextFontSize.SXS} title={label}/>}
            <select onChange={onChangeHandler} disabled={readonly} className={cls.select} value={value}>
                {optionsList}
            </select>
        </div>
  )
})
