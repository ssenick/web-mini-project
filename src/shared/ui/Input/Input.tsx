import type React from 'react'
import { useState, type InputHTMLAttributes, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Input = (props: InputProps): JSX.Element => {
  const {
    className,
    value,
    onChange,
    type = 'text',
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
        <div data-testid='input-wrapper' className={classNames(cls.inputWrapper, mods, [className])}>
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
}
