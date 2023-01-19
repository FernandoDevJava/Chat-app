import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from './services/firebase';
import Login from "./components/Login/"
import Loading from './components/Loading';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import './App.css'


const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  },[user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <div className='Contannner'>
    <Sidebar setUserChat={setUserChat} userChat={userChat} />
    <Chat userChat={userChat} />
    </div>
  )
};
export default App;