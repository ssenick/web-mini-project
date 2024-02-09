import { memo, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { LANGUAGE_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button'

import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
  children?: ReactNode
}
enum Languages {
  RU = 'ru',
  EN = 'en'
}

export const LangSwitcher = memo(({ className, children }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()

  const toggle = async (): Promise<void> => {
    switch (localStorage.getItem(LANGUAGE_LOCALSTORAGE_KEY)) {
      case Languages.RU:
        localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.EN)
        await i18n.changeLanguage(i18n.language = Languages.EN)
        break
      case Languages.EN:
        localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.RU)
        await i18n.changeLanguage(i18n.language = Languages.RU)
        break
      default:
        localStorage.setItem(LANGUAGE_LOCALSTORAGE_KEY, Languages.RU)
        await i18n.changeLanguage(i18n.language = Languages.RU)
    }
  }

  return (
        <Button
            variant={ButtonVariant.BACKGROUND}
            className={classNames(cls.LangSwitcher, {}, [className])}
            size={ButtonSize.XS}
            onClick={toggle}
        >
            {children || t('Язык')}
        </Button>
  )
})
