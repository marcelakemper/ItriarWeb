import React from 'react';
import itriar from './itriar.png'
import fotoperfil from './fotoperfil.png'
import line from './line.png'
import estrela from './estrela.png'
import atendimento from './atendimento.png'
import espera from './espera.png'
import './style.css'

const Home = () =>{


  return (
    <div className="container">
      <div className="header">
        <img src={itriar} alt="logo" className="logo"/>
        <h2 className="h2">Home</h2>
        <img src={fotoperfil} alt="foto perfil" className="fotoperfil"/>
      </div>

      <div>
        <button type="button" className="buttonPaciente">Pacientes</button>
        <button type="button" className="buttonFuncionario">Funcionários</button>
      </div>

      <div>
        <input type="text" id="searchQuery" name="q" placeholder="Procurar paciente" className="pesquisa"/>
      </div>

      <div className="containerI">
        <div>
          <input placeholder="Nome do paciente" className="nome"/>
        </div>

        <div>
          <h2 className="atendimento">Em atendimento</h2>
        </div>

        <div>
          <h2 className="espera">Em espera</h2>
        </div>

        <div>
          <img src={line} alt="line" className="line"/>
        </div>

        <div>
          <img src={estrela} alt="estrela" className="estrela"/>
        </div>

      </div>

      <div>
        <input placeholder="ID" className="id"/>
      </div>

      <img src={atendimento} alt="sinal atendimento" className="sinalA"/>

      
      <img src={espera} alt="sinal espera" className="sinalE"/>      
    </div>
  );
}

export default Home;