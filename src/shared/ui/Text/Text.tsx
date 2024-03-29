import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextVariant {
   NORMAL = 'normal',
   ERROR = 'error',
}
export enum TextAlign {
   LEFT = 'left',
   CENTER = 'center',
   RIGHT = 'right',
}
export enum TextFontSize {
   SXS = 'sizeSXS',
   XS = 'sizeXS',
   SM = 'sizeSM',
   M = 'sizeM',
   L = 'sizeL',
   XL = 'sizeXL',
}

type HeaderTypeText = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToHeaderTag: Record<TextFontSize, HeaderTypeText> = {
   [TextFontSize.SXS]: 'h6',
   [TextFontSize.XS]: 'h5',
   [TextFontSize.SM]: 'h4',
   [TextFontSize.M]: 'h3',
   [TextFontSize.L]: 'h2',
   [TextFontSize.XL]: 'h1',
};

interface TextProps {
   className?: string;
   title?: string;
   text?: string;
   variant?: TextVariant;
   size?: TextFontSize;
   texAlign?: TextAlign;

   'data-testid'?: string;
}

export const Text = memo((props: TextProps): JSX.Element => {
   const {
      className,
      title,
      text,
      variant = TextVariant.NORMAL,
      size = TextFontSize.M,
      texAlign = TextAlign.LEFT,
      'data-testid': dataTestId = 'Text',
   } = props;
   const HeaderTag = mapSizeToHeaderTag[size];

   return (
      <div className={classNames(cls.Text, {}, [className, cls[variant], cls[size], cls[texAlign]])}>
         {title && (
            <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
               {title}
            </HeaderTag>
         )}
         {text && (
            <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
               {text}
            </p>
         )}
      </div>
   );
});
