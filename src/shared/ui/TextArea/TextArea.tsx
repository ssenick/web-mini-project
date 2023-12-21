import type React from 'react'
import { type InputHTMLAttributes, memo, useCallback, useMemo, useState } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Text, TextFontSize } from '../Text/Text'
import cls from './TextArea.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>

interface TextAreaProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  readonly?: boolean
  label?: string
}

export const TextArea = memo((props: TextAreaProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
    label,
    ...otherProps
  } = props

  const [isFocus, setIsFocus] = useState(false)

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  const onFocus = useCallback(() => {
    if (!readonly) setIsFocus(true)
  }, [readonly])

  const onBlur = useCallback(() => {
    setIsFocus(false)
  }, [])

  const mods: Mods = useMemo(() => (
    {
      [cls.isFocus]: isFocus,
      [cls.readonly]: readonly
    }
  ), [isFocus, readonly])

  if (label) {
    return (
           <div className={classNames(cls.TextArea, mods, [className])}>
               <label >
                   {label && <Text size={TextFontSize.SXS} title={label} className={cls.label}/>}
                   <textarea
                       data-testid='input'
                       value={value}
                       onChange={onChangeHandler}
                       onFocus={onFocus}
                       onBlur={onBlur}
                       readOnly={readonly}
                       {...otherProps}
                   />
               </label>
           </div>
    )
  }

  return (
        <div className={classNames(cls.TextArea, mods, [className])}>
                <textarea
                    data-testid='input'
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readonly}
                    {...otherProps}
                />
        </div>
  )
})
