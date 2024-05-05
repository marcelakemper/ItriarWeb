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
            <h4 className="data-escuro">Data de nascimento</h4>
            <input className="inputdata-escuro"/>
            <h4 className="id-escuro">ID</h4>
            <input className="inputid-escuro"/>
            <h4 className="tel-escuro">Telefone</h4>
            <input className="inputtel-escuro"/>
            <h4 className="endereco-escuro">Endereço</h4>
            <input className="inputendereco-escuro"/>
            <h4 className="Especialidade-escuro">Especialidade</h4>
            <input className="inputEspecialidade-escuro"/>
            <h4 className="crm-escuro">CRM</h4>
            <input className="inputcrm-escuro"/>
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