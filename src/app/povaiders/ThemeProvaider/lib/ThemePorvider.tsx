import { LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext } from '../ui/ThemeContext'
import { useMemo, useState, type FC } from 'react'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KAY) as Theme || Theme.LIGHT
interface ThemeProviderProps {
  initialTheme?: Theme
}
const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    initialTheme,
    children
  } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)
  const defaultValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme])
  return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
  )
}
export default ThemeProvider
