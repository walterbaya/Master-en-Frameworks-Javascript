import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas'

class SeccionPruebas extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    }
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render() {
        return (
            <div className="center">
                <h2>últimos Articulos</h2>
                <h2>Componentes</h2>
                <section id="content">
                    <section className="componentes">
                        <MiComponente />
                        <Peliculas />
                    </section>
                </section>
                <p>{this.state.contador}</p>
                <p>
                    <input type="button" value="sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="restar" onClick={this.restar.bind(this)}/>
                </p>
            </div>);
    }
}

export default SeccionPruebas;