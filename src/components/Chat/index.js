import React from 'react'
import ChatHeader from "../ChatHeader";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";
import Default from "./../Default";
import './styles.css'


const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;
  return (
    <div className="Container-Chat">
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </div>
  );
};
export default Chat;