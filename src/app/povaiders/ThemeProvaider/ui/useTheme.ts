import { LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    // document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KAY, newTheme)
  }

  return { theme, toggleTheme }
}
