import React, { useEffect } from 'react'
import { useState } from "react";
import { themes } from './constants/recnroll';

export const Context = React.createContext({
    user: null,
    loading: false,
    language: "",
    setLanguage: () => {},
    theme: themes[0],
    setTheme: () => {}
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState("EN");
    const [theme, setTheme] = useState(themes[0])
    const [loading, setLoading] = useState(true)

    
    return (
        <Context.Provider value={{
            user,
            loading,
            theme,
            setTheme,
            language,
            setLanguage
        }}>
            {children}
          
        </Context.Provider>
    );
}

export default ContextProvider;