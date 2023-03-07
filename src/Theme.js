import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        if(theme === 'light') {
            setTheme('dark')
            document.body.style.backgroundColor = "#383838";
        } else {
            setTheme('light')
            document.body.style.backgroundColor = "white";
        }
    }

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                setTheme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };