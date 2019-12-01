import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="container home">
      <h1>Jogo da memória</h1>
      <Link to='/jogar'>
        <button>Jogar</button>
      </Link>
      <Link to="/scoreboard">
        <button>Scoreboard</button>
      </Link>      
    </main>    
  );
}

export default Home;