import React, { createContext, useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client'


const GET_USER = gql`
    query user($id: ID!){
        user(id: $id){
            id
            name
            email
            level
        }
    }
`

export const UserContext = createContext({
    login: false,
    token: null,
    user: '',
    setUser: () => {},
    level: 0,
    setLogin: () => {},
    setToken: () => {}
})

export const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(null);
    const [login, setLogin] = useState(false)
    const [token, setToken] = useState(null)
    const [user, setUser] = useState({})
    
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken')
        const storedUser = localStorage.getItem('user')
        if (storedToken) {
            setUser(JSON.parse(storedUser))
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
        user,
        setUser,
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