import React from 'react';
import itriar from './itriar.png'
import fotoperfil from './fotoperfil.png'
import line from './line.png'
import estrela from './estrela.png'
import atendimento from './atendimento.png'
import espera from './espera.png'
import './claro.css'

const Claro = () =>{

  return (
    <div className="container-claro">
      <div className="header-claro">
        <img src={itriar} alt="logo" className="logo-claro"/>
        <h2 className="h2-claro">Home</h2>
        <img src={fotoperfil} alt="foto perfil" className="fotoperfil-claro"/>
      </div>

      <div>
        <button type="button" className="buttonPaciente-claro">Pacientes</button>
        <button type="button" className="buttonFuncionario-claro">Funcionários</button>
      </div>

      <div>
        <input type="text" id="searchQuery" name="q" placeholder="Procurar paciente" className="pesquisa-claro"/>
      </div>

      <div className="containerI-claro">
        <div>
          <input placeholder="Nome do paciente" className="nome-claro"/>
        </div>

        <div>
          <h2 className="atendimento-claro">Em atendimento</h2>
        </div>

        <div>
          <h2 className="espera-claro">Em espera</h2>
        </div>

        <div>
          <img src={line} alt="line" className="line-claro"/>
        </div>

        <div>
          <img src={estrela} alt="estrela" className="estrela-claro"/>
        </div>

      </div>

      <div>
        <input placeholder="ID" className="id-claro"/>
      </div>

      <img src={atendimento} alt="sinal atendimento" className="sinalA-claro"/>

      
      <img src={espera} alt="sinal espera" className="sinalE-claro"/>      
    </div>
  );
}

export default Claro;