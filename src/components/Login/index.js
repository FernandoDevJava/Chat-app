nimport React from "react";
import { auth, provider } from "../../services/firebase"
import MachadoLogo from './assets/Machado-logo.png'
import './styles.css'

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <div className="Container">
            <div className="button-login">
                <img src={MachadoLogo} alt="" />
                <h1>Chat Fernando Machado</h1>
                <button onClick={handleSignin}>Login com Google</button>
            </div>
        </div>
    );
};

export default Login;
