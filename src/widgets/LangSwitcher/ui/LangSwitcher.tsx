import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonSize, Button, ButtonVariant } from 'shared/ui/Button/Button'
import { memo, type ReactNode } from 'react'

interface LangSwitcherProps {
  className?: string
  children?: ReactNode
}

export const LangSwitcher = memo(({ className, children }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const toggle = async (): Promise<void> => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
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
