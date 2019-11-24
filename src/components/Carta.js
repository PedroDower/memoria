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
            <div className={'carta' + (this.state.virada ? ' virada' : '')}>
                <p>{this.props.imagem}</p>                
            </div>
        )
    }

    virar() {
      this.setState(state => ({
        virada: true
      }));
    }
}

export default Carta;