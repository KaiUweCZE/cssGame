import React, { createContext, useState } from "react";

export const UserContext = createContext({
    login: false,
    setLogin: () => {}
})

export const UserContextProvider = ({children}) => {
    const [login, setLogin] = useState(false)
    
    const contextValue ={
        login,
        setLogin
    }
    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}