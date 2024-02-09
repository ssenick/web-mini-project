import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'

import { THEME_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

import { Theme, ThemeContext } from '../ui/ThemeContext'

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  children?: ReactNode
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  } = props
  const [darkMode, setDarkMode] = useState(false)
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    if (window.matchMedia && __PROJECT__ !== 'storybook') {
      const darkModeMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
      // Устанавливаем начальное значение
      setDarkMode(darkModeMediaQuery.matches)
      // Создаем функцию-обработчик изменений
      const handleChange = (): void => {
        setDarkMode(darkModeMediaQuery.matches)
      }
      // Вызываем функцию-обработчик при монтировании компонента
      handleChange()
      // Используем хук useEffect для обработки изменений
      const mediaQueryListEvent = 'change'
      darkModeMediaQuery.addEventListener(mediaQueryListEvent, handleChange)
      // Очистка слушателя при размонтировании компонента

      return () => {
        darkModeMediaQuery.removeEventListener(mediaQueryListEvent, handleChange)
      }
    }
  }, [])

  useEffect(() => {
    if (darkMode && !localStorage.getItem(THEME_LOCALSTORAGE_KEY)) {
      setTheme(Theme.DARK)
    }
  }, [darkMode])

  return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
  )
}
export default ThemeProvider
