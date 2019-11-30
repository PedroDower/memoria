import React from 'react';
import './carta.css';

class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {virada: false};

        this.virar = this.virar.bind(this);        
    }

    render() {
        return (
            <div className={'carta' + (this.state.virada ? ' virada' : '')} onClick={this.clicar}>
                <p>{this.props.imagem}</p>                
            </div>
        )
    }

    virar() {
        this.setState(state => ({
            virada: !this.state.virada
        }));
    }

    // Chama o metodo escolher do jogo, ele decide se a carta sera virada ou nao
    clicar = () => {        
        this.props.opEscolher(this, this.props.ctxJogo);
    }
}

export default Carta;