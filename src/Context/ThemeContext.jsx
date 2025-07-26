import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setDarkMode] = useState(
        () => {
            const savedTheme = localStorage.getItem('isDarkMode')
            return savedTheme ? JSON.parse(savedTheme) : false
        }
    )

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    } ,[isDarkMode])

    const toggleTheme  = () => {
        setDarkMode(!isDarkMode)
    }
    
    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)