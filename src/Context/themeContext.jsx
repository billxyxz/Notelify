import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



const ThemeContext = createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    function toggleSwitch(){
        setDarkMode(!darkMode)
    }


    return(
        <ThemeContext.Provider value={{
            darkMode,
            toggleSwitch,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}