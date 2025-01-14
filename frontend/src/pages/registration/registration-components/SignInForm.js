import React, { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "@contexts/UserContext";
import Loader from "@/components/feedback/Loader";
import { useNavigate } from "react-router-dom";
import WarningLabel from "@components/errors/WarningLabel";

const LOGIN_USER = gql`
  mutation LoginUser($name: String!, $password: String!) {
    loginUser(name: $name, password: $password) {
      token
      user {
        id
        name
        level
        completedLevels
        email
        emailVerified
      }
    }
  }
`;

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, updateUser, setUser } = useContext(UserContext);
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        variables: { name: username, password: password },
      });
      if (response.data.loginUser) {
        const { user, token } = response.data.loginUser;
        localStorage.setItem("authToken", token);
       // localStorage.setItem("user", JSON.stringify(user));
        setLogin(true);
        updateUser(user);
        setPassword("");

        // setUser(user);
        //const userString = JSON.parse(localStorage.getItem('user'))
        user.level === 0 ? navigate("/welcome") : navigate("/map");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //if (error) return <p>this username or password is not valid</p>;
  if (loading) return <Loader />;

  return (
    <form 
      className="login-form" 
      onSubmit={handleLogin}
      id="signin-form"
      role="tabpanel"
      aria-labelledby="signin-tab"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="username-input"
        name="username"
        required
        aria-required="true"
        aria-describedby={error ? "login-error" : undefined}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password-input"
        name="password"
        required
        aria-required="true"
        aria-describedby={error ? "login-error" : undefined}
      />
      <button 
        type="submit"
        aria-label="Sign in to your account"
      >
        Sign In
      </button>
      {error ? (
        <WarningLabel 
          text="this username or password is not valid" 
          id="login-error"
          role="alert"
          aria-live="assertive"
        />
      ) : null}
    </form>
  );
};

export default SignInForm;
