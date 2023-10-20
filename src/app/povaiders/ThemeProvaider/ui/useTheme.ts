import { Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme?.(newTheme)
    // document.body.className = newTheme
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
  }

  return {
    theme: theme || Theme.DARK,
    toggleTheme
  }
}
