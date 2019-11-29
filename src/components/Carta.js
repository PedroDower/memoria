import React from 'react';
import './carta.css';

import Jogo from './Jogo.js';

class Carta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {virada: false};

        this.virar = this.virar.bind(this);
    }

    render() {
        return (
            <div className={'carta' + (this.state.virada ? ' virada' : '')} onClick={this.virar}>
                <p>{this.props.imagem}</p>                
            </div>
        )
    }

    virar = () => {
        this.setState(state => ({
            virada: true
        }));

        this.props.escolher();
    }
}

export default Carta;