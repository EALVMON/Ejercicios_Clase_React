import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import Formulario from './Formulario';
import ToggleVisibilidad from './ToggleVisibilidad';
import ListaTareas from './ListaTareas';
import BuscadorProductos from './BuscadorProductos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Contador></Contador>
        </div>
        <div>
        <Formulario></Formulario>
        </div>
        <div>
        <ToggleVisibilidad> </ToggleVisibilidad>
      </div>
      <div>
      <ListaTareas></ListaTareas>
      </div>
      <div>
        <BuscadorProductos></BuscadorProductos>
      </div>
      </header>
    </div>
  );
}

export default App;
