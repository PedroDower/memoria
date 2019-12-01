import React from 'react';
import { Redirect } from 'react-router-dom';

import Carta from './Carta.js';

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            cartaEscolhida: null,   
            acertos: 0,         
            ganhou: false,
        }
                
        this.escolher = this.escolher.bind(this);
        this.cartas = ['!', '@', '#', '$', '%', '&', '*', '?', '~'];
        //this.cartas = ['1', '2'];
    }
    static listaCartas;
    static cartas;

    renderVitoria = () => {
        if (this.state.ganhou) {
            return <Redirect to='/vitoria' />
        }
    }

    render() {
        
        // cria duas cartas para cada imagem
        let cartas = this.cartas.concat(this.cartas);
        // embaralha
        cartas = shuffle(cartas);
        
        this.listaCartas = cartas.map((carta) =>
            <div className="col-4 col-md-3 col-lg-2">
                <Carta key={carta} imagem={carta} opEscolher={this.escolher}></Carta>
            </div>            
        );

        return (
            <div className="jogo">
                <div className="cartas row">
                    {this.listaCartas}
                </div>
                { this.renderVitoria() }              
            </div>            
        )
    }

    // metodo chamado quando uma carta eh clicada
    escolher(carta) {

        // se a carta não estiver virada
        if(!carta.state.virada) {
            // se vai escolher a primeira carta            
            if(this.state.cartaEscolhida == null) {
                carta.virar();
            
                /* eu sei que eu não devo alterar o estado diretamente, mas ele da uns bug 
                        absurdo se eu chamar o método setState */
                this.state.cartaEscolhida = carta;                                
            }
            else {
                carta.virar();

                // se encontrou duas cartas iguais
                if(carta.props.imagem === this.state.cartaEscolhida.props.imagem) {                                        
                    this.state.cartaEscolhida = null;

                    this.state.acertos += 1;
                    this.testaVitoria();
                }
                // se nao vira as cartas pra baixo novamente
                else {                    
                    setTimeout(carta.virar, 1000);
                    setTimeout(this.state.cartaEscolhida.virar, 1000) 
                    
                    this.state.cartaEscolhida = null;                    
                }            
            }
        }                   
    }

    testaVitoria() {
        // se numero de acertos é igual a qtd de cartas        
        if(this.cartas.length === this.state.acertos) {            
            this.setState({
                ganhou: true
            });
        }
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