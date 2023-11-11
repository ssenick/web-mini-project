import { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ButtonVariant } from '../Button/Button'
import CopyIcon from 'shared/assets/icons/copy.svg'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string
  text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text)
  }, [text])
  return (

        <div className={classNames(cls.Code, {}, [className])}>
            <pre className={cls.pre}>
                <Button onClick={onCopy} className={cls.button_copy} variant={ButtonVariant.THEME_ICON}>
                    <Icon Svg={CopyIcon} className={cls.icon}/>
                </Button>
                <code>
                    {text}
                </code>
            </pre>
        </div>
  )
})
