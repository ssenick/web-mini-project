import type React from 'react'
import { useState, type InputHTMLAttributes, useCallback, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

export enum InputVariant {
  NORMAL = '',
  INVERSE_BG = 'inverse-bg'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
  className?: string
  variant?: InputVariant
  value?: string
  onChange?: (value: string) => void
}

export const Input = memo((props: InputProps): JSX.Element => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    variant = InputVariant.NORMAL,
    ...otherProps
  } = props
  const [isFocus, setIsFocus] = useState(false)

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }, [onChange])

  const onFocus = useCallback(() => {
    setIsFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocus(false)
  }, [])

  const mods: Record<string, boolean> = {
    [cls.isFocus]: isFocus
  }
  return (
        <div data-testid='input-wrapper' className={classNames(cls.inputWrapper, mods, [className, cls[variant]])}>
            <input
                data-testid='input'
                value={value}
                onChange={onChangeHandler}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
  )
})
