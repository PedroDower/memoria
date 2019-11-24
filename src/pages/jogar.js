import React from 'react';
import './home.css';
import Jogo from '../components/Jogo.js';

function Jogar() {
  return (
    <main className="container jogar">
      <div className="row">
        <h1>Memória</h1>
      </div>
      <div className="row jogo">
        <Jogo></Jogo> 
      </div>      
    </main>    
  );
}

export default Jogar;