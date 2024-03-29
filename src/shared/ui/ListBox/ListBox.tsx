import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, memo, type ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

import { classNames } from '@/shared/lib/classNames/classNames';

import ArrowIcon from '../../assets/icons/arrow_down.svg';
import { VStack } from '../Stack';
import { Text, TextFontSize } from '../Text/Text';
import cls from './ListBox.module.scss';

export enum ListBoxVariant {
   STANDARD = 'standard',
   THEME_ICON = 'icon',
}

export interface ListBoxItem<T extends string> {
   value: T;
   content: ReactNode;
   disabled?: boolean;
}

interface ListBoxProps<T extends string> {
   className?: string;
   items?: Array<ListBoxItem<T>>;
   variant?: ListBoxVariant;
   value?: string;
   label?: string;
   defaultValue?: string;
   contentTitle?: boolean;
   onChange: (value: T) => void;
   readonly?: boolean;
   onlyIcon?: boolean;
   test?: string;
}

export const ListBox = memo(<T extends string>(props: ListBoxProps<T>) => {
   const {
      className,
      items,
      value,
      variant = ListBoxVariant.STANDARD,
      defaultValue,
      readonly,
      contentTitle,
      label,
      test,
      onlyIcon,
      onChange,
   } = props;

   const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
   const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
   const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [
         {
            name: 'flip',
            options: { padding: 10, fallbackPlacements: ['top', 'bottom'] },
         },
         { name: 'offset', options: { offset: [0, 10] } },
      ],
   });

   const foundItemContent = items?.find((item) => item.value === (value ?? defaultValue))?.content || value;

   return (
      <VStack gap={'5'} className={classNames(cls.ListBox, {}, [className, cls[variant]])}>
         {label && <Text className={cls.label} size={TextFontSize.SXS} title={label} />}
         <HListbox data-testid={test} value={value} onChange={onChange} disabled={readonly} as={'div'}>
            <HListbox.Button className={cls.button} ref={setReferenceElement}>
               {({ open }) => {
                  const arrowIcon = <ArrowIcon className={classNames('', { [cls.open]: open }, [])} />;
                  return (
                     <>
                        {contentTitle ? foundItemContent : value ?? defaultValue}
                        {!onlyIcon && arrowIcon}
                     </>
                  );
               }}
            </HListbox.Button>
            <HListbox.Options
               className={cls.options}
               style={styles.popper}
               {...attributes.popper}
               ref={setPopperElement}
            >
               {items?.map((item) => (
                  <HListbox.Option key={item.value} value={item.value} disabled={item.disabled} as={Fragment}>
                     {({ active, selected }) => (
                        <li
                           className={classNames(
                              cls.item,
                              {
                                 [cls.active]: active,
                                 [cls.selected]: selected,
                                 [cls.disabled]: item.disabled,
                              },
                              [],
                           )}
                        >
                           {item.content}
                        </li>
                     )}
                  </HListbox.Option>
               ))}
            </HListbox.Options>
         </HListbox>
      </VStack>
   );
});
