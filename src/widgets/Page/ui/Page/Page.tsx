import { type FC, type MutableRefObject, type ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div className={cls.trigger} ref={triggerRef}></div>
        </section>
  )
}
