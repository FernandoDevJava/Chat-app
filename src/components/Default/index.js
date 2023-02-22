import React from 'react'
import MachadoLogo from './assets/Machado-logo.png'
import './styles.css'
const Default = () => {
  return (
    <div className="Container-Default">
        <img src={MachadoLogo} alt="" />
        <h1>Chat Fernando Machado</h1>
        <span>
            Inicie uma Conversa.
        </span>
    </div>
  )
};
export default Default;
