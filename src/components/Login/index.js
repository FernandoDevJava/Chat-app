import React from "react";
import { auth, provider } from "../../services/firebase"
import './styles.css'

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <div className="Container">
            <div className="button-login">
            <button onClick={handleSignin}>Login com Google</button>
            </div>
        </div>
    );
};

export default Login;