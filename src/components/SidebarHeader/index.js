import React from 'react'
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md"
import * as EmailValidator from 'email-validator'
import { auth, db } from "../../services/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from "react-firebase-hooks/firestore"
import './styles.css'

const SidebarHeader = ({ setUserChat }) => {
    const [user] = useAuthState(auth);
    const refChat = db
      .collection("chats")
      .where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(refChat);
  
    const handleCreateChat = () => {
      const emailInput = prompt("Escreva o e-mail desejado");
  
      if (!emailInput) return;
  
      if (!EmailValidator.validate(emailInput)) {
        return alert("E-mail inválido!");
      } else if (emailInput === user.email) {
        return alert("Insira um e-mail diferente do seu!");
      } else if (chatExists(emailInput)) {
        return alert("Chat já existe!");
      }
  
      db.collection("chats").add({
        users: [user.email, emailInput],
      });
    };
  
    const chatExists = (emailChat) => {
      return !!chatsSnapshot?.docs.find(
        (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
      );
    };


  return (
  <div>
    <div className='Container-sidebarheader'>
    <img src={user?.photoURL} onClick={() => [auth.signOut(), setUserChat(null)]} alt="" />
    <div className='Container-sidebarheader-imagens'>
    <MdDonutLarge fontSize={30} />
    <MdChat fontSize={30} onClick={handleCreateChat} />
    <MdMoreVert fontSize={30} />
    </div>
  </div>
  <div className="Options-sidebarheader">
  
    
  </div>
  </div>
  )
  
};
export default SidebarHeader;