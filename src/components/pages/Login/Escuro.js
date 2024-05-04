import React from 'react';
import frame from './frame.png'
import itriar from './itriar.png'
import keyIcon from './Key.png'
import emailIcon from './email.png'
import { Link, useHistory} from 'react-router-dom';
import '../Login/escuro.css'

const Escuro = () =>{

  const [email, onChangeTextEmail] = React.useState('');
  const [senha, onChangeTextSenha] = React.useState('');

  return (
    <div className="container-escuro">
      <div>
        <img src={frame} alt="frame" className="frame-escuro"/>
      </div>

      <div className="login-escuro">
        <div>
          <img src={itriar} alt="logo" className="logo-escuro"/>
        </div>

        <div>
          <input className="inputI-escuro" id="idbotao" value={email} placeholder="Email ou ID hospitalar"/>
          <img src={emailIcon} alt="email" className="email-escuro"/>
        </div>

        <div>
          <input className="inputII-escuro" id="idbotao" value={senha} placeholder="Senha"/>
          <img src={keyIcon} alt="key" className="key-escuro"/>
        </div>

        <div>
          <button id="EsqueceuSenha" className="esqueceuSenha-escuro">Esqueceu a senha?</button>
        </div>

        <div>
          <Link to="/Home" >
            <button className="entrar-escuro">Entrar</button>
          </Link>
        </div>

        <div className="contaI-escuro">
          <Link to="/" className="conta-escuro">
            Não tem uma conta ainda?<h3 className="crie-escuro">Crie</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Escuro;