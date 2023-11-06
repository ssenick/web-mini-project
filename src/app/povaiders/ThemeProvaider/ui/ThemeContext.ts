import { createContext } from 'react'

export enum Theme {
  LIGHT = 'lightTheme',
  DARK = 'darkTheme',
  FUNNY = 'funnyTheme'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
