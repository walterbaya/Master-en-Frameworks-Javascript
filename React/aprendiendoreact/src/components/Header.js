import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo"/>
                            <span id="brand">
                                <strong>Curso</strong>React
                            </span>
                                </div>
                   {/*Comentario*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="#">Formulario</a>
                            </li>
                            <li>
                                <a href="#">Página 1</a>
                            </li>
                            <li>
                                <a href="#">Página 2</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;