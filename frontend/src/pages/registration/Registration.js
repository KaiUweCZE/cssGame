import React, { useState } from "react";
import SignInForm from "./registration-components/SignInForm";
import SignUpForm from "./registration-components/SignUpForm";
import "./registration-style.css";

const Registration = () => {
  const [formType, setFormType] = useState(false);

  return (
    <div className="wrapper">
      <div className="login-form__background">
        <div className="container-login">
          <article className="login__info">
            <div>
              <button
                className={formType ? "active" : ""}
                onMouseDown={() => setFormType(true)}
              >
                Sign Up
              </button>
              <button
                className={formType ? "" : "active"}
                onMouseDown={() => setFormType(false)}
              >
                Login
              </button>
            </div>
            {formType ? (
              <p>
                Providing an email is not required to create an account.
                However, it can be useful if you ever forget your password. You
                can always add or update your email later in your account
                settings.
              </p>
            ) : (
              <p>Welcome back & Happy coding</p>
            )}
          </article>
          {formType ? <SignUpForm /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default Registration;
