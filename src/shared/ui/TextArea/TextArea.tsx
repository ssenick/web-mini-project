import type React from 'react';
import { type InputHTMLAttributes, memo, useCallback, useMemo, useState } from 'react';

import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import { Text, TextFontSize } from '../Text/Text';
import cls from './TextArea.module.scss';

export enum TextAreaVariant {
   NORMAL = '',
   INVERSE_BG = 'inverse-bg',
}
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>;

interface TextAreaProps extends HTMLInputProps {
   className?: string;
   variant?: TextAreaVariant;
   value?: string | number;
   onChange?: (value: string) => void;
   readonly?: boolean;
   label?: string;
   height?: string;
}

export const TextArea = memo((props: TextAreaProps) => {
   const {
      className,
      value,
      onChange,
      readonly,
      label,
      height,
      variant = TextAreaVariant.NORMAL,
      ...otherProps
   } = props;

   const [isFocus, setIsFocus] = useState(false);

   const onChangeHandler = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

   const mods: Mods = useMemo(
      () => ({
         [cls.isFocus]: isFocus,
         [cls.readonly]: readonly,
      }),
      [isFocus, readonly],
   );
   const style = useMemo(() => ({ height }), [height]);
   if (label) {
      return (
         <div className={classNames(cls.TextArea, mods, [className, cls[variant]])}>
            <label>
               {label && <Text size={TextFontSize.SXS} title={label} className={cls.label} />}
               <textarea
                  data-testid="input"
                  value={value}
                  onChange={onChangeHandler}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  readOnly={readonly}
                  style={style}
                  {...otherProps}
               />
            </label>
         </div>
      );
   }

   return (
      <div className={classNames(cls.TextArea, mods, [className])}>
         <textarea
            data-testid="input"
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            readOnly={readonly}
            style={style}
            {...otherProps}
         />
      </div>
   );
});
