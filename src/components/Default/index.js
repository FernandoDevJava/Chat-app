import React from 'react'
import LogoMobato from './assets/mobato_logo2.png'
import './styles.css'
const Default = () => {
  return (
    <div className="Container-Default">
        <img src={LogoMobato} alt="" />
        <h1>Chat Mobato</h1>
        <span>
            Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet.
        </span>
    </div>
  )
};
export default Default;