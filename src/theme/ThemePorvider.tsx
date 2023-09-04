import {LOCAL_STORAGE_THEME_KAY, Theme, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KAY) as Theme || Theme.LIGHT

export const ThemeProvider: FC = ({children}) => {

    const [theme,setTheme] = useState<Theme>(defaultTheme);
    const defaultValue = useMemo(()=> ({
        theme,
        setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}