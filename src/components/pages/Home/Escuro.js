import React from 'react';
import itriar from './itriar.png'
import fotoperfil from './fotoperfil.png'
import line from './line.png'
import estrela from './estrela.png'
import atendimento from './atendimento.png'
import espera from './espera.png'
import './escuro.css'

const Escuro = () =>{

  return (
    <div className="container-escuro">
      <div className="header-escuro">
        <img src={itriar} alt="logo" className="logo-escuro"/>
        <h2 className="h2-escuro">Home</h2>
        <img src={fotoperfil} alt="foto perfil" className="fotoperfil-escuro"/>
      </div>

      <div>
        <button type="button" className="buttonPaciente-escuro">Pacientes</button>
        <button type="button" className="buttonFuncionario-escuro">Funcionários</button>
      </div>

      <div>
        <input type="text" id="searchQuery" name="q" placeholder="Procurar paciente" className="pesquisa-escuro"/>
      </div>

      <div className="containerI-escuro">
        <div>
          <input placeholder="Nome do paciente" className="nome-escuro"/>
        </div>

        <div>
          <h2 className="atendimento-escuro">Em atendimento</h2>
        </div>

        <div>
          <h2 className="espera-escuro">Em espera</h2>
        </div>

        <div>
          <img src={line} alt="line" className="line-escuro"/>
        </div>

        <div>
          <img src={estrela} alt="estrela" className="estrela-escuro"/>
        </div>

      </div>

      <div>
        <input placeholder="ID" className="id-escuro"/>
      </div>

      <img src={atendimento} alt="sinal atendimento" className="sinalA-escuro"/>

      
      <img src={espera} alt="sinal espera" className="sinalE-escuro"/>      
    </div>
  );
}

export default Escuro;