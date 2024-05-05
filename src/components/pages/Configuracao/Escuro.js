import React from 'react';
import itriar from './itriar.png'
import fotoperfil from './fotoperfil.png'
import { Link, useHistory} from 'react-router-dom';
import './escuro.css'

const Escuro = () =>{

  return (
    <div className="container-claro">
      <img src={itriar} alt="logo" className="log-escuro"/>
    </div>
  );
}

export default Escuro;