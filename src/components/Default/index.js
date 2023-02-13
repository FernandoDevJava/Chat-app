import React from 'react'
import MachadoLogo from './assets/Machado-logo.png'
import './styles.css'
const Default = () => {
  return (
    <div className="Container-Default">
        <img src={MachadoLogo} alt="" />
        <h1>Chat Mobato</h1>
        <span>
            Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet.
        </span>
    </div>
  )
};
export default Default;
