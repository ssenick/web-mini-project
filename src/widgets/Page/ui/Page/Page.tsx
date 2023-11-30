import { memo, type MutableRefObject, type ReactNode, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
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
})
