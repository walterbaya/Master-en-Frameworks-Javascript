import React, { Component } from 'react';

class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.marcarFavorita(this.pelicula), this.props.indice);
    }

    favorita = (pelicula, indice) => {
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }
    render() {
        const pelicula = this.props.pelicula;
        const { titulo, image } = pelicula;
        return (
            < article className="article-item" id="article-template" >
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <button onClick={this.marcar}>Marca como favorita</button>
                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;