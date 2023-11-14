import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CopyIcon from 'shared/assets/icons/copy.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Icon } from 'shared/ui/Icon/Icon'
import { Text, TextFontSize } from 'shared/ui/Text/Text'
import { Button, ButtonVariant } from '../Button/Button'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}
const delay = 500

export const Code = memo(({ className, text }: CodeProps) => {
  const [isCopy, setIsCopy] = useState(false)
  const { t } = useTranslation()
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, delay)
  }, [text])
  console.log(isCopy)
  return (

        <div className={classNames(cls.Code, {}, [className])}>
            <pre className={cls.pre}>
                <Button onClick={onCopy} className={cls.button_copy} variant={ButtonVariant.THEME_ICON}>
                    <Icon Svg={CopyIcon} className={cls.icon}/>
                </Button>
                {isCopy && (
                    <div className={cls.massage}>
                        <Text size={TextFontSize.L} title={t('Текст скопирован')} />
                    </div>
                )}

                <code>
                    {text}
                </code>
            </pre>
        </div>
  )
})
