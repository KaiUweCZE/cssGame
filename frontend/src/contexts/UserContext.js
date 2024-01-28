import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    login: false,
    token: null,
    setLogin: () => {},
    setToken: () => {}
})

export const UserContextProvider = ({children}) => {
    const [login, setLogin] = useState(false)
    const [token, setToken] = useState(null)
    
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken')
        if (storedToken) {
            setToken(storedToken)
            setLogin(true)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem('authToken')
        setToken(null)
        setLogin(false)
    }

    const contextValue ={
        login,
        token,
        setLogin,
        setToken,
        logout
    }

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}