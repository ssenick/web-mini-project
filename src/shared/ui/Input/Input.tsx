import type React from 'react';
import { type InputHTMLAttributes, memo, useCallback, useMemo, useState } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import closeIcon from '../../assets/icons/close.svg';
import { Icon } from '../Icon/Icon';
import { VStack } from '../Stack';
import { Text, TextFontSize } from '../Text/Text';
import cls from './Input.module.scss';

export enum InputVariant {
   NORMAL = '',
   INVERSE_BG = 'inverse-bg',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
   className?: string;
   variant?: InputVariant;
   value?: string | number;
   onChange?: (value: string) => void;
   autofocus?: boolean;
   readonly?: boolean;
   label?: string;
   labelSize?: TextFontSize;
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
      label,
      labelSize = TextFontSize.SXS,
      ...otherProps
   } = props;
   const [isFocus, setIsFocus] = useState(false);

   const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
         onChange?.(e.target.value);
      },
      [onChange],
   );

   const onFocus = useCallback(() => {
      if (!readonly) setIsFocus(true);
   }, [readonly]);

   const onBlur = useCallback(() => {
      setIsFocus(false);
   }, []);

   const cleaningValue = useCallback(() => {
      onChange?.('');
   }, [onChange]);

   const mods: Mods = useMemo(
      () => ({
         [cls.isFocus]: isFocus,
         [cls.readonly]: readonly,
      }),
      [isFocus, readonly],
   );

   return (
      <div
         data-testid="input-wrapper"
         className={classNames(cls.inputWrapper, mods, [className, cls[variant]])}
      >
         <label>
            {label && <Text size={labelSize} title={label} className={cls.label} />}
            <VStack className={cls.stack}>
               <input
                  data-testid="input"
                  value={value}
                  onChange={onChangeHandler}
                  type={type}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  readOnly={readonly}
                  {...otherProps}
                  autoFocus={autofocus}
               />
               {value && !readonly && (
                  <Icon
                     onClick={cleaningValue}
                     width={24}
                     height={24}
                     Svg={closeIcon}
                     className={cls.close}
                  />
               )}
            </VStack>
         </label>
      </div>
   );
});
