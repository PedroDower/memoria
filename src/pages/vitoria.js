import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'

function Vitoria() {
  return (
    <main className="container home">
      <h1>Memória</h1>
      <h2>Parabéns! Você ganhou!</h2>
      <Link to='/jogar'>
        <button>Jogar de novo</button>
      </Link>
      <Link to="/">
        <button>Voltar</button>
      </Link>      
    </main>    
  );
}

export default Vitoria;