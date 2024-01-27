import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "../contexts/UserContext";

const LOGIN_USER =gql`
    mutation LoginUser($name: String!, $password: String!){
        loginUser(name: $name, password: $password){
            id
            name
        }
    }
`

const SignInForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setLogin } = useContext(UserContext)
    const [loginUser, {loading, error}] = useMutation(LOGIN_USER)

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await loginUser({variables: {name: username, password: password}})
            if (response.data.loginUser) {
                setLogin(true)
                setUsername('')
                setPassword('')
                console.log('Login was successful');
            }
        } catch (error) {
            console.error(error);
        }
    }

    if (error) return <p>error</p>
    if (loading) return <p>loading</p>

    return(
        <form className="registration__form" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
    )
}

export default SignInForm