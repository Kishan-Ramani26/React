import {createContext,useContext} from "react"

export const ThemeConext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
})

export const ThemeProvider = ThemeConext.Provider

export default function userTheme(){
    return useContext(ThemeConext)
}