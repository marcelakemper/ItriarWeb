import React from 'react';
import itriar from './itriar.png';
import fotoperfil from './fotoperfil.png';
import { Link, useHistory} from 'react-router-dom';
import'./escuro.css'

const Escuro = () =>{

  return (
    <div className="container-escuro">
        <div className="header-escuro">
            <img src={itriar} alt="logo" className="logo-escuro"/>
            <img src={fotoperfil} alt="fotoperfil" className="fotoperfil-escuro"/>
            <h3 className="excluir-escuro">Excluir conta</h3>
        </div>

        <div className="form-escuro">
            <h2 className="dados-escuro">DADOS DO HOSPITAL</h2>
            <h4 className="nome-escuro">Nome</h4>
            <input className="inputnome-escuro"/>
            <h4 className="id-escuro">ID</h4>
            <input className="inputid-escuro"/>
            <h4 className="loc-escuro">Localização</h4>
            <input className="inputloc-escuro"/>
            <h4 className="tel-escuro">Telefone</h4>
            <input className="inputtel-escuro"/>
            <h4 className="con-escuro">Convenios</h4>
            <input className="inputcon-escuro"/>
            <h4 className="redes-escuro">Rede</h4>
            <input className="inputredes-escuro"/>
            <h4 className="acri-escuro">Ano de criação</h4>
            <input className="inputacri-escuro"/>
            <h4 className="senha-escuro">Senha</h4>
            <input className="inputsenha-escuro"/>
        </div>

        <div>
          <Link to="/CProfissional" >
            <button className="continuar-escuro">Continuar</button>
          </Link>
        </div>
    </div>
  );
}

export default Escuro;