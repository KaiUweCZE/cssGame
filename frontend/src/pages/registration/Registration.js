import React, { useState } from "react";
import SignInForm from "./registration-components/SignInForm";
import SignUpForm from "./registration-components/SignUpForm";

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
                Pro registraci můžete zvolit jakýkoliv počet písmen + email
                input je prozatím ilustrativní, takže bude stačit text s @
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
