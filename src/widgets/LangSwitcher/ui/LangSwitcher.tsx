import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonSize, Button, ButtonVariant } from 'shared/ui/Button/Button'
import { type ReactNode } from 'react'

interface LangSwitcherProps {
  className?: string
  children?: ReactNode
}

export const LangSwitcher = ({ className, children }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const toggle = async (): Promise<void> => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <Button
            variant={ButtonVariant.BACKGROUND}
            className={classNames(cls.LangSwitcher, {}, [className])}
            // square
            size={ButtonSize.SM}
            onClick={toggle}
        >
            {children || t('Язык')}
        </Button>
  )
}
