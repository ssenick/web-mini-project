import { ButtonVariant, Button } from 'shared/ui/Button/Button'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { type ReactNode } from 'react'

interface ThemeSwitcherProps {
  className?: string
  children?: ReactNode
}

export const ThemeSwitcher = ({ className, children }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
            {children || theme === Theme.DARK ? <SunIcon/> : <MoonIcon/>}
            {/* {children && children} */}
        </Button>
  )
}
