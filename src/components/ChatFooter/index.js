
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import './styles.css'

const ChatFooter = ({ chatId }) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  console.log("mensagem de test", message)

  const handleSendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="Container-ChatFooter">
      <form onSubmit={handleSendMessage}>
        <input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="Div-MdSend">
        <MdSend fontSize={30} onClick={handleSendMessage} />
        </div>
      </form>
    </div>
  )
};
export default ChatFooter;