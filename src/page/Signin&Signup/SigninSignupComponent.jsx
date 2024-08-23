import React from "react";
import SignInComponent from "../../components/SignIn/SignInComponent";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import './signin-signup.scss';

const SigninSignupComponent  = () => {
    return (
        <div className="signin-signup">
            <SignInComponent />
            <SignUpComponent />
        </div>
    )
}
export default SigninSignupComponent;