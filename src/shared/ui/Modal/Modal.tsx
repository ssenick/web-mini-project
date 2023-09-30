import type React from 'react'
import { useState, type ReactNode, useRef, useEffect, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Modal = (props: ModalProps): JSX.Element => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback((): void => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        document.body.classList.remove('lock')
        setIsClosing(false)
      }, 1000)
    }
  }, [onClose])

  const onContentClick = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation()
  }, [])
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('lock')
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [cls.isOpen]: isOpen,
    [cls.isClose]: isClosing
  }
  return (
        <div className={classNames(cls.Modal, mods, [className])}>
              <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={onContentClick}>
                  {children}
                </div>
              </div>
        </div>
  )
}
