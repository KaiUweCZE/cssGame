import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Loader from "../../../components/Loader";
import WarningLabel from "@components/Errors/WarningLabel";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registred, setRegistred] = useState(false);
  const [createUser, { error, loading }] = useMutation(CREATE_USER);

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser({
      variables: { name: username, email: email, password: password },
    })
      .then(() => setRegistred(true))
      .catch((err) => console.error(err));
  };

  if (loading) return <Loader />;
  if (registred) return <h2>Registration was successful</h2>;

  return (
    <form className="login-form" onSubmit={handleCreateUser}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Sign Up" />
      {error ? <WarningLabel text="Error occurs" /> : null}
    </form>
  );
};

export default SignUpForm;
