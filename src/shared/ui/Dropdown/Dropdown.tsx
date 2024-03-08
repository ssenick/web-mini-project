import { Menu } from '@headlessui/react';
import { memo, type ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import { type To } from 'react-router';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Dropdown.module.scss';

export interface DropdownItem {
   content: ReactNode;
   onClick?: () => void;
   disabled?: boolean;
   href?: string;
}
interface DropdownProps {
   className?: string;
   items: DropdownItem[];
   trigger: ReactNode;
}
export const Dropdown = memo((props: DropdownProps) => {
   const { className, items, trigger } = props;

   const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
   const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
   const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'bottom-start',
      modifiers: [
         {
            name: 'flip',
            options: {
               padding: 10,
               fallbackPlacements: ['bottom-end', 'bottom-start'],
            },
         },
         { name: 'offset', options: { offset: [0, 10] } },
      ],
   });

   return (
      <div className={classNames(cls.Dropdown, {}, [className])}>
         <Menu>
            <Menu.Button className={cls.button} ref={setReferenceElement}>
               {trigger}
            </Menu.Button>
            <Menu.Items
               className={cls.list}
               style={styles.popper}
               {...attributes.popper}
               ref={setPopperElement}
            >
               {items.map((item, index) => {
                  if (item.href) {
                     return (
                        <Menu.Item key={index} disabled={item.disabled}>
                           {({ active }) => (
                              <Link
                                 to={item.href as To}
                                 className={classNames(cls.content, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                 })}
                              >
                                 {item.content}
                              </Link>
                           )}
                        </Menu.Item>
                     );
                  }

                  return (
                     <Menu.Item key={index} disabled={item.disabled}>
                        {({ active }) => (
                           <button
                              type="button"
                              onClick={item.onClick}
                              className={classNames(cls.content, {
                                 [cls.active]: active,
                                 [cls.disabled]: item.disabled,
                              })}
                           >
                              {item.content}
                           </button>
                        )}
                     </Menu.Item>
                  );
               })}
            </Menu.Items>
         </Menu>
      </div>
   );
});
