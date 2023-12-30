import { Menu } from '@headlessui/react'
import { memo, type ReactNode, useState } from 'react'
import { usePopper } from 'react-popper'
import { type To } from 'react-router'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

export interface DropdownItem {
  content: ReactNode
  onClick?: () => void
  disabled?: boolean
  href?: string
}
interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
}
export const Dropdown = memo((props: DropdownProps) => {
  const {
    className,
    items,
    trigger
  } = props

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [{ name: 'flip', options: { padding: 10, fallbackPlacements: ['bottom-end', 'bottom-start'] } },
      { name: 'offset', options: { offset: [0, 10] } }]
  })

  return (
      <div className={classNames(cls.Dropdown, {}, [className])}>
          <Menu >
              <Menu.Button className={cls.button} ref={setReferenceElement}>
                  {trigger}
              </Menu.Button>
              <Menu.Items className={cls.list} style={styles.popper} {...attributes.popper} ref={setPopperElement}>
                  {items.map((item, index) => {
                    if (item.href) {
                      return (
                          <Menu.Item key={index} disabled={item.disabled}>
                              {({ active }: { active: boolean }): ReactNode => (
                                <AppLink
                                    to={item.href as To}
                                    disabled={item.disabled}
                                    className={classNames(cls.content, { [cls.active]: active })}
                                >
                                    {item.content}
                                </AppLink>
                              )}
                          </Menu.Item>
                      )
                    }

                    return (
                        <Menu.Item key={index} disabled={item.disabled}>
                            {({ active }: { active: boolean }): ReactNode => (
                                <button
                                    type="button"
                                    disabled={item.disabled}
                                    onClick={item.onClick}
                                    className={classNames(cls.content, { [cls.active]: active })}
                                >
                                    {item.content}
                                </button>
                            )}
                        </Menu.Item>
                    )
                  })}
              </Menu.Items>
          </Menu>
      </div>
  )
})
