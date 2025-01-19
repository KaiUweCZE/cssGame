import React, { useState } from "react";
import SignInForm from "./registration-components/SignInForm";
import SignUpForm from "./registration-components/SignUpForm";
import "./registration-style.css";
import ForgotPasswordModal from "./registration-components/modals/ForgotPasswordModal";

const Registration = () => {
  const [formType, setFormType] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="wrapper">
      <div className="login-form__background">
        <div className="container-login">
          <article
            className="login__info"
            role="region"
            aria-label="Registration options"
          >
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
                can always add or update your email later in your account.
              </p>
            ) : (
              <div id="signin-info" aria-live="polite">
                <p>Welcome back & Happy coding</p>
              </div>
            )}
          </article>
          {formType ? (
            <SignUpForm />
          ) : (
            <SignInForm setIsModalOpen={setIsModalOpen} />
          )}
          <ForgotPasswordModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
