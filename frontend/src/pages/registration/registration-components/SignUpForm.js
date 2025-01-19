import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Loader from "@/components/feedback/Loader";
import WarningLabel from "@components/errors/WarningLabel";
import LoginMessage from "./LoginMessage";
import { SEND_CONFIRMATION_EMAIL } from "@/utils/queries/sendEmail";
import { useCreateToken } from "@/utils/queries/createVerificationToken";
import { RegexIcon, UserRoundPlus } from "lucide-react";

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [createUser, { error, loading }] = useMutation(CREATE_USER);
  const [sendEmail, { loading: emailLoading, error: emailError }] = useMutation(
    SEND_CONFIRMATION_EMAIL
  );
  const {
    createToken,
    loading: tokenLoading,
    error: tokenError,
  } = useCreateToken();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const variables = { name: username, password: password };
    if (email.trim() !== "") {
      variables.email = email.trim();
    }
    try {
      const { data } = await createUser({ variables });
      console.log("user is: ", data.createUser);
      if (email.trim()) {
        try {
          const tokenResult = await createToken(data.createUser.id);
          console.log("token is", tokenResult);
          await sendEmail({
            variables: { email: email.trim(), token: tokenResult.token.token },
          });
          alert("Confirmation email sent successfully!");
        } catch (err) {
          console.error("Failed to send email:", err);
          alert("Error sending email. Please try again later.");
        }
      }

      setRegistered(true);
    } catch (err) {
      console.error("Error creating user", err);
    }
  };

  if (loading || emailLoading || tokenLoading) return <Loader />;
  if (registered) return <LoginMessage />;

  return (
    <form
      className="login-form"
      onSubmit={handleCreateUser}
      id="signup-form"
      role="tabpanel"
      aria-labelledby="signup-tab"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id="signup-username"
        name="username"
        required
        aria-required="true"
        aria-describedby={error ? "signup-error" : undefined}
      />
      <input
        type="email"
        placeholder="Email is optional"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="signup-email"
        name="email"
        aria-required="false"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="signup-password"
        name="password"
        required
        aria-required="true"
        aria-describedby={error ? "signup-error" : undefined}
      />
      <button type="submit" aria-label="Create new account">
        <UserRoundPlus size={20} aria-hidden="true" color="white" />
        <span>Sign Up</span>
      </button>
      {error && (
        <WarningLabel
          text="Error occurs"
          id="signup-error"
          role="alert"
          aria-live="assertive"
        />
      )}
    </form>
  );
};

export default SignUpForm;
