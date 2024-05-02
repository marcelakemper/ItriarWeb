import React from 'react';
import frame from './frame.png'
import itriar from './itriar.png'
import keyIcon from './Key.png'
import emailIcon from './email.png'
import { Link } from 'react-router-dom';
import Home from '../Home'
import './style.css'

const Login = () =>{

  const [email, onChangeTextEmail] = React.useState('');
  const [senha, onChangeTextSenha] = React.useState('');

  return (
    <div className="container">
      <div>
        <img src={frame} alt="frame" className="frame"/>
      </div>

      <div className="login">
        <div>
          <img src={itriar} alt="logo" className="logo"/>
        </div>

        <div>
          <input className="inputI" id="idbotao" value={email} placeholder="Email ou ID hospitalar"/>
          <img src={emailIcon} alt="email" className="email"/>
        </div>

        <div>
          <input className="inputII" id="idbotao" value={senha} placeholder="Senha"/>
          <img src={keyIcon} alt="key" className="key"/>
        </div>

        <div>
          <button id="EsqueceuSenha" className="esqueceuSenha">Esqueceu a senha?</button>
        </div>

        <div>
          <Link to="/Home" >
            <button className="entrar">Entrar</button>
          </Link>
        </div>

        <div className="contaI">
          <Link to="/" className="conta">
            Não tem uma conta ainda?<h3 className="crie">Crie</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;