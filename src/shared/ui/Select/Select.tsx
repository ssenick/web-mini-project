import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import cls from './Select.module.scss'

export enum SelectVariant {
  NORMAL = '',
  INVERSE_BG = 'inverse-bg'
}

interface SelectProps {
  className?: string
  label?: string
  value?: string
  readonly?: boolean
  variant?: SelectVariant
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    value,
    readonly,
    variant = SelectVariant.NORMAL
  } = props

  return (
        <div className={classNames(cls.Select, {}, [className, cls[variant]])}>
            {label && <Text className={cls.label} size={TextFontSize.SXS} title={label}/>}
            <select disabled={readonly} className={cls.select} value={value}>
                <option className={cls.option} value="123">121212213</option>
                <option className={cls.option} value="321">321</option>
            </select>
        </div>
  )
})
