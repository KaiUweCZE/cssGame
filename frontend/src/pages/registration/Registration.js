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
                For registration you can choose any number of letters + email
                input is illustrative for now, so text with @ will suffice
              </p>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                aspernatur eligendi in exercitationem quam, suscipit illo.
              </p>
            )}
          </article>
          {formType ? <SignUpForm /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default Registration;
