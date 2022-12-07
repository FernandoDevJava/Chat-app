import React from 'react'
import SidebarHeader from '../SidebarHeader/index';
import SidebarChats from '../SidebarChats/index'
import './styles.css'

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <div className='Container-sidebar'>
        <SidebarHeader setUserChat={setUserChat} />
        <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </div>
  )
};
export default Sidebar;