import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="ruta-prueba" component={SeccionPruebas}></Route>
                    <Route exact path="segunda-ruta" component={MiComponente}></Route>

                </Switch>

            </BrowserRouter>
        );
    }
}

export default router;