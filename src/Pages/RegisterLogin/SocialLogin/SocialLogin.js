import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./SocialLogin.css";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message}
                    {error1?.message}
                </p>
            </div>
        );
    }
    if (user||user1) {
        navigate("/");
    }
    return (
        <div>
            <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">or</div>
                <div className="line-separator"></div>
            </div>
            {errorElement}
            <div className="row">
                <div className="col-md-12">
                    <button
                        onClick={() => signInWithGoogle()}
                        className="d-block mx-auto my-2 loginBtn loginBtn-google"
                    >
                        Signin with Google
                    </button>
                    <button class="d-block mx-auto my-2 loginBtn loginBtn-facebook">
                        Login with Facebook
                    </button>
                    <button
                        onClick={() => signInWithGithub()}
                        className="d-block mx-auto my-2 loginBtn loginBtn-git"
                    >
                        Signin with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
