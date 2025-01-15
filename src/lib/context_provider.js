import React, { useEffect } from 'react'
import { useState } from "react";

export const Context = React.createContext({
    user: null,
    loading: false,
});

const ContextProvider = ({ children }) => {
    // User / Loading States
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    return (
        <Context.Provider value={{
            user,
            loading,
        }}>
            {children}
          
        </Context.Provider>
    );
}

export default ContextProvider;