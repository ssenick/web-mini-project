import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import Button, { ButtonSize, ButtonVariant } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const toggle = async (): Promise<void> => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <Button
            variant={ButtonVariant.BACKGROUND}
            className={classNames(cls.LangSwitcher, {}, [className])}
            square
            size={ButtonSize.M}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
  )
}
