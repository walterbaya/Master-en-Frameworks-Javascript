import React, { Component } from 'react';
import MiComponente from './MiComponente';
import Peliculas from './Peliculas'

class SeccionPruebas extends Component {
    render() {
        return (
            <div className="center">
                <h1>últimos Articulos</h1>
                <section id="content">
                    <section className="componentes">
                        <MiComponente />
                        <Peliculas />
                    </section>
                </section>
            </div>);
    }
}

export default SeccionPruebas;