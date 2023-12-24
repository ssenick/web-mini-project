import { memo, type ReactNode } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

export type FlexJustify = 'center' | 'start' | 'end' | 'between'
export type FlexAlign = 'center' | 'start' | 'end' | 'stretch'
export type FlexDirection = 'row' | 'column'
export type FlexGap = '4' | '5' | '8' | '10' | '15' | '20' | '25' | '30'
export type roles = 'div' | 'header' | 'aside' | 'ul' | 'section' | 'article'

const justifyClasses: Record<FlexJustify, string> = {
  center: cls.justifyCenter,
  start: cls.justifyStart,
  end: cls.justifyEnd,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  start: cls.alignStart,
  end: cls.alignEnd,
  stretch: cls.alignStretch
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}
const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  5: cls.gap5,
  8: cls.gap8,
  10: cls.gap10,
  15: cls.gap15,
  20: cls.gap20,
  25: cls.gap25,
  30: cls.gap30
}

export interface FlexProps {
  className?: string
  children?: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
  wrap?: boolean
  role?: roles
}

export const Flex = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    wrap,
    role = 'div'
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: max,
    [cls.wrap]: wrap
  }

  const tagByRole: Record<roles, keyof JSX.IntrinsicElements> = {
    div: 'div',
    header: 'header',
    aside: 'aside',
    ul: 'ul',
    section: 'section',
    article: 'article'
  }

  const Tag = tagByRole[role]
  return (
        <Tag className={classNames(cls.Flex, mods, classes)}>
          {children}
        </Tag>
  )
})
