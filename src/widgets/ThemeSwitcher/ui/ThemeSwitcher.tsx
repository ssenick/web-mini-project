import { Theme, useTheme } from 'app/povaiders/ThemeProvaider'
import { memo, type ReactNode, useMemo } from 'react'
import FunnyIcon from 'shared/assets/icons/funnyTheme.svg'
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'
import { ListBox, type ListBoxItem, ListBoxVariant } from 'shared/ui/ListBox/ListBox'

interface ThemeSwitcherProps {
  className?: string
  childrenStorybook?: ReactNode
}

export const ThemeSwitcher = memo(({ className, childrenStorybook }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const orderOptions = useMemo<Array<ListBoxItem<Theme>>>(() => [
    {
      value: Theme.LIGHT,
      content: <SunIcon/>
    },
    {
      value: Theme.DARK,
      content: <MoonIcon/>
    },
    {
      value: Theme.FUNNY,
      content: <FunnyIcon/>
    }
  ], [])

  const handlerThemeChange = (value: string): void => {
    toggleTheme?.(value as Theme)
  }

  return (
      <ListBox
          test={'themSwitcherBtn'}
          onlyIcon
          value={theme}
          contentTitle
          variant={ListBoxVariant.THEME_ICON}
          onChange={handlerThemeChange}
          items={orderOptions}
      />
  // <Button data-testid='themSwitcherBtn' variant={ButtonVariant.THEME_ICON} onClick={toggleTheme} className={className}>
  //     {(childrenStorybook || theme === Theme.DARK) && <FunnyIcon /> }
  //     {(childrenStorybook || theme === Theme.FUNNY) && <SunIcon /> }
  //     {(childrenStorybook || theme === Theme.LIGHT) && <MoonIcon /> }
  // </Button>
  )
})
