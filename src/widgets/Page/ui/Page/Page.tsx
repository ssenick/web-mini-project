import { type StateSchema } from 'app/povaiders/StoreProvaider'
import { getScrollSaveByPath, scrollActions } from 'features/ScrollSave'
import { type FC, type MutableRefObject, type ReactNode, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import cls from './Page.module.scss'

interface PageProps {
  className?: string
  scrollTrigger?: boolean
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
  const {
    className,
    children,
    onScrollEnd,
    scrollTrigger = false
  } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname))

  // const onScroll = (): void => {
  //   if (scrollTrigger) {
  //     dispatch(scrollActions.setScrollPosition({
  //       position: wrapperRef.current.scrollTop,
  //       path: pathname
  //     }))
  //   }
  // }

  const onScroll = useDebounce(() => {
    if (scrollTrigger) {
      dispatch(scrollActions.setScrollPosition({
        position: wrapperRef.current.scrollTop,
        path: pathname
      }))
    }
  }, 400)
  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })
  // прокрутка к позиции
  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })
  return (
        <section
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}>
            {children}
            <div className={cls.trigger} ref={triggerRef}></div>
        </section>
  )
}
