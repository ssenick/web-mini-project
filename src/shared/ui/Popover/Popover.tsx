import { Popover as HPopover } from '@headlessui/react'
import { memo, type ReactNode, useState } from 'react'
import { usePopper } from 'react-popper'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Popover.module.scss'

interface PopoverProps {
  className?: string
  trigger?: ReactNode
  children?: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    children
  } = props
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'flip', options: { padding: 10, fallbackPlacements: ['bottom'] } },
      { name: 'offset', options: { offset: [0, 10] } }]
  })

  return (
      <HPopover className={classNames(cls.Popover, {}, [className])}>
          <HPopover.Button
              as={'div'}
              className={cls.trigger}
              ref={setReferenceElement}
          >
              {trigger}
          </HPopover.Button>
          <HPopover.Panel
              className={cls.panel}
              style={styles.popper} {...attributes.popper} ref={setPopperElement}
          >
                  {children}
          </HPopover.Panel>
      </HPopover>
  )
})
