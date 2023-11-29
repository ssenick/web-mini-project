import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import { memo, type ReactNode } from 'react'
import FunnyIcon from 'shared/assets/icons/funnyTheme.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
  childrenStorybook?: ReactNode
}

export const ThemeSwitcher = memo(({ className, childrenStorybook }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button data-testid='themSwitcherBtn' variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
            {(childrenStorybook || theme === Theme.DARK) && <FunnyIcon /> }
            {(childrenStorybook || theme === Theme.FUNNY) && <SunIcon /> }
            {(childrenStorybook || theme === Theme.LIGHT) && <MoonIcon /> }
        </Button>
  )
})
