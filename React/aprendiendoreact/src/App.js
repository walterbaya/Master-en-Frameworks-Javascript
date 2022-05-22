import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas'
import { Router } from 'react-router-dom';
import Router from 'Router';

function HolaMundo(nombre) {
  var presentacion = <div>
    <h2>Hola soy</h2> + {nombre};
    <h2>Hola soy</h2> + {nombre};</div>
  return presentacion;
}

function App() {
  var buttonString = "Ir al blog";
  return (
    <div className="App">
      <Header />
      <Slider title="Bienvenido"
        btn= {buttonString}

      />
      <Router></Router>
      <Sidebar />
      <div className='clearfix'></div>
      <Footer />
    </div>
  );
}

export default App;
