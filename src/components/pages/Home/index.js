
import React, { useState, useEffect } from 'react';
import Escuro from './Escuro';
import Claro from './Claro';
import './index.css'

function Home() {
  // Estado do modo inicial definido como claro por padrão
  const [modoEscuro, setModoEscuro] = useState(() => {
    // Verifica se há um estado de modo salvo no localStorage
    const modoSalvo = localStorage.getItem('modoEscuro');
    // Se houver um estado salvo, retorna o estado convertido para booleano
    return modoSalvo ? JSON.parse(modoSalvo) : false;
  });

  // Função para alternar o modo e salvar o estado no localStorage
  const toggleModo = () => {
    const novoModo = !modoEscuro;
    setModoEscuro(novoModo);
    // Salva o novo estado do modo no localStorage
    localStorage.setItem('modoEscuro', JSON.stringify(novoModo));
  };

  // Efeito para carregar o estado do modo ao carregar a página
  useEffect(() => {
    const modoSalvo = localStorage.getItem('modoEscuro');
    if (modoSalvo !== null) {
      // Define o estado do modo com base no valor salvo no localStorage
      setModoEscuro(JSON.parse(modoSalvo));
    }
  }, []); // Executa apenas uma vez ao carregar a página

  return (
    <div className="App">
      <div className="container">
        {modoEscuro ? <Escuro /> : <Claro />}
      </div>
      <div className="footer">
        <button onClick={toggleModo} className="button">
          {modoEscuro ? 'Modo claro' : 'Modo escuro'}
        </button>
      </div>
    </div>
  );
}

export default Home;
