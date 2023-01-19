import React from 'react'
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import './styles.css'

const ChatHeader = ({ photoURL, name }) => {
  return (
    <div className="Container-ChatHeader">
      <div className="UserInfo">
      {photoURL ? <avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <div className="Div-Name">{name}</div>
      </div>
      <div className="Div-Options">
        <MdSearch />
        <MdMoreVert />
      </div>
    </div>
  )
};
export default ChatHeader;