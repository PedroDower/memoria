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
            <div className={'carta' + (this.state.virada ? ' virada' : '')} onClick={() => this.props.funcaoVirar()}>
                <p>{this.props.imagem}</p>                
            </div>
        )
    }

    
}

export default Carta;