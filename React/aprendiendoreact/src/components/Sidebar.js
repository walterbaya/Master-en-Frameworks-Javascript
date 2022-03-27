import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear Articulo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p href="#">Encuentra el artículo que buscas</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;