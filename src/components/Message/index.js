import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../services/firebase"
import './styles.css'

const Message = ({ user, message }) => {
    const [userLoggedIn] = useAuthState(auth);
    console.log("userLoggedIn", userLoggedIn)
    console.log("user", user)

  return (
    <div className="Container-Message">
        <div className={userLoggedIn?.email === user ? "My-message" : ""}>
            <div className="Div-Cont">
                <div className='span'>{message.message}</div>
                <div className="spanMessageDate">
                {new Date(message?.timestamp).toLocaleString()}
                </div>
            </div>
        </div>
    </div>
  )
};
export default Message;