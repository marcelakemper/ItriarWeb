import React from 'react';
import FrameC from './FrameC.png'
import itriar from './itriar.png'
import KeyC from './KeyC.png'
import EmailC from './EmailC.png'
import { Link, useHistory} from 'react-router-dom';
import '../Login/claro.css'

const Claro = () =>{

  const [email, onChangeTextEmail] = React.useState('');
  const [senha, onChangeTextSenha] = React.useState('');

  return (
    <div className="container-claro">
      <div>
        <img src={FrameC} alt="FrameC" className="FrameC-claro"/>
      </div>

      <div className="login-claro">
        <div>
          <img src={itriar} alt="logo" className="logo-claro"/>
        </div>

        <div>
          <input className="inputI-claro" id="idbotao" value={email} placeholder="Email ou ID hospitalar"/>
          <img src={EmailC} alt="email" className="email-claro"/>
        </div>

        <div>
          <input className="inputII-claro" id="idbotao" value={senha} placeholder="Senha"/>
          <img src={KeyC} alt="key" className="key-claro"/>
        </div>

        <div>
          <button id="EsqueceuSenha" className="esqueceuSenha-claro">Esqueceu a senha?</button>
        </div>

        <div>
          <Link to="/Home" >
            <button className="entrar-claro">Entrar</button>
          </Link>
        </div>

        <div className="contaI-claro">
          <Link to="/" className="conta-claro">
            Não tem uma conta ainda?<h3 className="crie-claro">Crie</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Claro;