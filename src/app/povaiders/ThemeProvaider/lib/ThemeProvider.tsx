import { Theme, ThemeContext } from '../ui/ThemeContext'
import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react'
import { THEME_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

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
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
  )
}
export default ThemeProvider
