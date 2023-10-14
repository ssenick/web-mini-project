import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { memo, type ReactNode } from 'react'

interface ThemeSwitcherProps {
  className?: string
  childrenStorybook?: ReactNode
}

export const ThemeSwitcher = memo(({ className, childrenStorybook }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button data-testid='themSwitcherBtn' variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
            {childrenStorybook || theme === Theme.DARK ? <SunIcon/> : <MoonIcon/>}
        </Button>
  )
})
