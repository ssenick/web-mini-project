import Button, { ButtonVariant } from 'shared/ui/Button/Button'
import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
            {theme === Theme.DARK ? <SunIcon/> : <MoonIcon/>}
        </Button>
  )
}
