import { useContext } from 'react'

import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

import { Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  theme: Theme
  toggleTheme: (newTheme: Theme) => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (newTheme: Theme): void => {
    // let newTheme: Theme
    // switch (theme) {
    //   case Theme.LIGHT:
    //     newTheme = Theme.DARK
    //     break
    //   case Theme.DARK:
    //     newTheme = Theme.FUNNY
    //     break
    //   case Theme.FUNNY:
    //     newTheme = Theme.LIGHT
    //     break
    //   default:
    //     newTheme = Theme.LIGHT
    // }
    setTheme?.(newTheme)
    // document.body.className = newTheme
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
  }

  return {
    theme: theme || Theme.DARK,
    toggleTheme
  }
}
