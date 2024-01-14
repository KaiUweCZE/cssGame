import React, { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";


const Registration = () => {
    const [formType, setFormType] = useState(false)


    return(
        <div className="wrapper">
            <div className="form__background">
                <div className="container-registration">
                    <article className="registration__info">
                        <div>
                            <button className={formType ? 'active' : ''} onMouseDown={() => setFormType(true)}>Sign Up</button>
                            <button className={formType ? '' : 'active'}  onMouseDown={() => setFormType(false)}>Login</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. 
                            Cumque aspernatur 
                            eligendi in exercitationem quam, suscipit illo.
                        </p>
                    </article>
                    { formType ?
                        <SignUpForm /> 
                        :
                        <SignInForm />
                    }
                </div>
            </div>
        </div>
        
        
    )
}

export default Registration