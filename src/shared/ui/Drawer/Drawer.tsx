import { type ReactNode, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal'

import { Portal } from '../Portal/Portal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props
  const {
    onContentClick,
    isClosing,
    closeHandler,
    isMounted
  } = useModal({
    onClose,
    isOpen,
    animationDelay: 600
  })

  const mods: Mods = useMemo(() => (
    {
      [cls.isOpen]: isOpen,
      [cls.isClosing]: isClosing

    }
  ), [isOpen, isClosing])

  if (lazy && !isMounted) return null
  return (
      <Portal >
          <div className={classNames(cls.Drawer, mods, [className])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div className={cls.wrapper} onClick={onContentClick}>
                      <div className={cls.content}>
                          {children}
                      </div>
                  </div>
              </div>
          </div>
      </Portal>
  )
}
