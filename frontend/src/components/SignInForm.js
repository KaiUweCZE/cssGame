import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../contexts/UserContext";
import Loader from "./Loader";
import ErrorSign from "./Errors/ErrorSign";
import { useNavigate } from "react-router-dom";

const LOGIN_USER =gql`
    mutation LoginUser($name: String!, $password: String!){
        loginUser(name: $name, password: $password){
            token
            user{
                id,
                name,
                level
            }
        }
    }
`

const SignInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setLogin, setUser } = useContext(UserContext)
    const [loginUser, {loading, error}] = useMutation(LOGIN_USER)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await loginUser({variables: {name: username, password: password}})
            if (response.data.loginUser) {
                const { user, token } = response.data.loginUser;
                localStorage.setItem('authToken', token)
                localStorage.setItem('user', JSON.stringify(user))
                setLogin(true)
                setUsername('')
                setPassword('')
                console.log('Login was successful, token is:', token);
                console.log('User id is: ', user.id);
                setUser(user)
                user.level === 0 ? navigate('/welcome') : navigate('/map')
            }   
        } catch (error) {
            console.error(error);
        }
    }

    if (error) return <ErrorSign />
    if (loading) return <Loader />

    return(
        <form className="registration__form" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    )
}

export default SignInForm