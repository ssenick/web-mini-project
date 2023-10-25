import type React from 'react'
import { useState, type InputHTMLAttributes, useCallback, memo, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

export enum InputVariant {
  NORMAL = '',
  INVERSE_BG = 'inverse-bg'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string
  variant?: InputVariant
  value?: string | number
  onChange?: (value: string) => void
  autofocus?: boolean
  readonly?: boolean
}

export const Input = memo((props: InputProps): JSX.Element => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    variant = InputVariant.NORMAL,
    autofocus,
    readonly,
    ...otherProps
  } = props
  const [isFocus, setIsFocus] = useState(false)

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
        <div data-testid='input-wrapper' className={classNames(cls.inputWrapper, mods, [className, cls[variant]])}>
          <label >
            <input
                data-testid='input'
                value={value}
                onChange={onChangeHandler}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                {...otherProps}
                autoFocus={autofocus}
            />
          </label>
        </div>
  )
})
