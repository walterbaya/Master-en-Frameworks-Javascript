import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {
    state = {
        peliculas: [{ titulo: "Batman vs Superman", image: "https://www.cinemascomics.com/wp-content/uploads/2014/05/batmanvssupermandawnofjustice.jpg" }, { titulo: "granTorino", image: "data:image/jpeg;base64,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" },
        { titulo: "looper", image: "https://es.web.img3.acsta.net/medias/nmedia/18/92/47/73/20250845.jpg" }
        ],
        nombre: "Victor Robles",
        favorita: {}
    };

    favorita = (event) => {
        console.log(event);
    }

    cambiarTitulo = () => {

        var { peliculas } = this.state;

        peliculas[0].titulo = "Batman Begins";

        this.setState({
            peliculas: this.peliculas,
            favorita: this.favorita
        });
    }

    componentWillMount(){
        alert("Este metodo esta deprecado");
    }

    componentDidMount(){
        alert("Se acaba de cargar el componente de peliculas");
    }

    componentWillUnmount(){
        alert("Componente se desmontar??");
    }
    /**Es quien inscrusta en la pagina el html
    Cuando se monta: con el componentDidMount
    Cuando se muestra: con el render
    Cuando se desmonta: componentDid
    cuando se actualiza algo: componentUpdate*/
    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        return (
            <React.Fragment>
                <div className="peliculas" id="content">
                    <h2 className="subheader">Peliculas</h2>
                    <p>Selecci??n de las peliculas favoritas de {this.state.nombre}</p>

                    <div><button onClick={this.cambiarTitulo}>Cambiar titulo de Batman</button></div>
                    {   /**Condicional con &&, se muestra solo
                    si la condicion se cumpla, se puede utilizar
                    ? como un if ternario (condici??n) ? (trozo de jsx) (trozo de jsx)*/
                        this.state.favorita.titulo &&
                        <p className='favorita' style={pStyle}> <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    }

                    {/**Crear componente pelicula */}
                    <div id="articles" className="peliculas">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula key={i} pelicula={pelicula}
                                        marcarFavorita={this.favorita}
                                        
                                    />)
                            })}
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Peliculas;