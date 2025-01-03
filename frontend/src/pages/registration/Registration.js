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
          <article className="login__info" role="region" aria-label="Registration options">
            <div role="tablist">
              <button
                className={formType ? "active" : ""}
                onMouseDown={() => setFormType(true)}
                role="tab"
                aria-selected={formType}
                aria-controls="signup-form"
                id="signup-tab"
              >
                <span>Sign Up</span>
              </button>
              <button
                className={formType ? "" : "active"}
                onMouseDown={() => setFormType(false)}
                role="tab"
                aria-selected={!formType}
                aria-controls="signin-form"
                id="signin-tab"
              >
                <span>Sign In</span>
              </button>
            </div>
            {formType ? (
              <p id="signup-info" aria-live="polite">
                Providing an email is not required to create an account.
                However, it can be useful if you ever forget your password. You
                can always add or update your email later in your account
                settings.
              </p>
            ) : (
              <p id="signin-info" aria-live="polite">Welcome back & Happy coding</p>
            )}
          </article>
          {formType ? <SignUpForm /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default Registration;
