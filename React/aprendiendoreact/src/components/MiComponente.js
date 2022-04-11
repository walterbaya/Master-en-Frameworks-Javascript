import React from 'react';
import { Component } from 'react';

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: "Pizza",
            ingredientes: ["Tomate", "Queso", "Harina"],
            calorias: 400

        };

        return (
            <React.Fragment>
                <h2>{'Receta' + receta.nombre + 'Ingredientes' + receta.ingredientes}</h2>
                < h1 > Hola, soy el componente MiComponente</h1 >
                {receta.ingredientes.map((ingrediente, i) => {
                    return (
                        <li key="{i}">{ingrediente}</li>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default MiComponente;