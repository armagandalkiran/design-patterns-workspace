import { useState, createContext } from "react";

export const ThemeContext = createContext();

const themes = {
    light: {background: "#fff", color:"#000"},
    dark: {background: "#171717", color:"#fff"},
}

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark");
    
    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const providerValue = { theme: themes[theme], toggleTheme};

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;