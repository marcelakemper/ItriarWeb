import React from 'react';
import itriar from './itriar.png'
import fotoperfil from './fotoperfil.png'
import './escuro.css'

const Claro = () =>{

  return (
    <div className="container-escuro">
      <div className="header-escuro">
        <img src={itriar} alt="logo" className="logo-escuro"/>
        <h2 className="h2-escuro">Home</h2>
        <img src={fotoperfil} alt="foto perfil" className="fotoperfil-escuro"/>
      </div>

           
    </div>
  );
}

export default Claro;