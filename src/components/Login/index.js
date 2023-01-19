import React from "react";
import { auth, provider } from "../../services/firebase"
import LogoMobato from './assets/mobato_logo2.png'
import './styles.css'

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <div className="Container">
            <div className="button-login">
                <img src={LogoMobato} alt="" />
                <h1>Chat Mobato</h1>
                <button onClick={handleSignin}>Login com Google</button>
            </div>
        </div>
    );
};

export default Login;