import React from 'react';
import itriar from './itriar.png';
import fotoperfil from './fotoperfil.png';
import { Link, useHistory} from 'react-router-dom';
import'./claro.css'

const Claro = () =>{

  return (
    <div className="container-claro">
        <div className="header-claro">
            <img src={itriar} alt="logo" className="logo-claro"/>
            <img src={fotoperfil} alt="fotoperfil" className="fotoperfil-claro"/>
            <h3 className="excluir-claro">Excluir conta</h3>
        </div>

        <div className="form-claro">
            <h2 className="dados-claro">DADOS DO HOSPITAL</h2>
            <h4 className="nome-claro">Nome</h4>
            <input className="inputnome-claro"/>
            <h4 className="id-claro">ID</h4>
            <input className="inputid-claro"/>
            <h4 className="loc-claro">Localização</h4>
            <input className="inputloc-claro"/>
            <h4 className="tel-claro">Telefone</h4>
            <input className="inputtel-claro"/>
            <h4 className="con-claro">Convenios</h4>
            <input className="inputcon-claro"/>
            <h4 className="redes-claro">Rede</h4>
            <input className="inputredes-claro"/>
            <h4 className="acri-claro">Ano de criação</h4>
            <input className="inputacri-claro"/>
            <h4 className="senha-claro">Senha</h4>
            <input className="inputsenha-claro"/>
        </div>

        <div>
          <Link to="/CProfissional" >
            <button className="continuar-escuro">Continuar</button>
          </Link>
        </div>

    </div>
  );
}

export default Claro;