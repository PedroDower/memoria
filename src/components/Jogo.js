import React from 'react';
//import './jogo.css';

import Carta from './Carta.js';

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            estado: 'iniciando',
            carta1: null,
            carta2: null,
        }

        //this.escolher = this.escolher.bind(this);
    }

    render() {
        let cartas = [1, 2, 3, 4, 5, 6, 7];
        // cria duas cartas para cada imagem
        cartas = cartas.concat(cartas);
        // embaralha
        cartas = shuffle(cartas);

        let listaCartas = cartas.map((carta) =>
            <div className="col-4 col-md-3 col-lg-2" onClick={this.escolher}>
                <Carta imagem={carta} metEscolhes={this.escolher}></Carta>
            </div>
        );

        return (
            <div className="cartas row">
                {listaCartas}
            </div>            
        )
    }

    escolher() {
        console.log('escolhido');
    }

    
}



function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

  
export default Jogo;