import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from "../../services/firebase"
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatsItem from "../SidebarChatsItem/index";
import './styles.css';

const SidebarChats = ({ setUserChat, userChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);

  return (
    <div className="Container-sidebarchats">     
     {chatsSnapshot?.docs.map((item, index) => (        
        <div key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().user}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          <hr/>
        </div>
      ))}
    </div>
  );
};


export default SidebarChats;