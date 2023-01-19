import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import { MdPerson } from "react-icons/md";
import './styles.css'


const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email);

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const getUserItem = useCollection(
    db.collection("users").where("email", "==", getUser(users, user)),

  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const [item] = getUser(users, user);
console.log(item)
  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };


    setUserChat(userChat);
  };

  return (    
      <div onClick={handleNewChat} className={active}>
        <div className="into">
        <img src={Avatar?.photoURL} alt="" /> <MdPerson fontSize={30} />
      <div className="Name">{item.split("0")[0]}</div>  
        </div>          
    </div>    
  )
};
export default SidebarChatsItem;