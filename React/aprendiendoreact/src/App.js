import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function HolaMundo(nombre) {
  var presentacion = <div>
    <h2>Hola soy</h2> + {nombre};
    <h2>Hola soy</h2> + {nombre};</div>
  return presentacion;
}

function App() {
  var nombre = "Victor Robles";
  return (
    <div className="App">
      <Header />
      <Slider />
      <SeccionPruebas/>
    
      <Sidebar />
      <div className='clearfix'></div>
      <Footer/>
    </div>
  );
}

export default App;
